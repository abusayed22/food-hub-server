import { orderStatus, Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma"


type CreateOrderInput = {
  items: { mealId: string, quantity: number, price: number }[];
  user_id: string
  customerName: string
  customerPhone: string
  deliveryAddress: string
  deliveryNote?: string
  deliveryFee: number
  orderNumber: string
}

export interface GetOrdersParams {
  search?: string;
  status?: string;
  provider_id?: string;
  startDate?: string;
  endDate?: string;
}

export interface PaginationOptions {
  page?: number | string;
  limit?: number | string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export const getAllOrders = async (
  filters: GetOrdersParams,
  paginationOptions: PaginationOptions
) => {

  const { search, status, provider_id, startDate, endDate } = filters;
  const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationOptions;

  const pageNumber = Number(page) > 0 ? Number(page) : 1;
  const limitNumber = Number(limit) > 0 ? Number(limit) : 10;
  const skip = (pageNumber - 1) * limitNumber;



  const andConditions: Prisma.orderWhereInput[] = [];

  if (provider_id) {
    andConditions.push({ user_id: provider_id });
  }

  if (search) {
    andConditions.push({
      OR: [
        { orderNumber: { contains: search, mode: "insensitive" } },
        { customerName: { contains: search, mode: "insensitive" } },
        { customerPhone: { contains: search, mode: "insensitive" } },
        { id: { contains: search, mode: "insensitive" } }
      ],
    });
  }

  if (status && status !== 'all') {
    const statusKey = status.toLowerCase();

    if (statusKey === 'pending') {
      andConditions.push({ status: 'PENDING' });
    }
    else if (statusKey === 'active') {
      andConditions.push({
        status: {
          in: ['CONFIRMED', 'PREPARING', 'READY', 'OUT_FOR_DELIVERY']
        }
      });
    }
    else if (statusKey === 'completed') {
      andConditions.push({
        status: {
          in: ['DELIVERED', 'CANCELLED']
        }
      });
    }
    else {
      andConditions.push({ status: status as orderStatus });
    }
  }

  if (startDate || endDate) {
    andConditions.push({
      createdAt: {
        gte: startDate ? new Date(startDate) : '',
        lte: endDate ? new Date(endDate) : '',
      }
    });
  }

  const whereConditions: Prisma.orderWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where: whereConditions,
      skip,
      take: limitNumber,
      orderBy: { [sortBy]: sortOrder },
      include: {
        items: {
          include: {
            menu: {
              select: {
                name: true,
                image: true
              }
            }
          }
        },
        user: {
          select: {
            name: true,
            email: true,
            image: true
          }
        }
      }
    }),
    prisma.order.count({ where: whereConditions }),
  ]);


  // 6. Return Formatted Response
  return {
    meta: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
    data: orders,
  };
};

export const getSingleOrder = async (orderId: string, user_id: string) => {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
    },
    include: {
      items: {
        select: {
          id: true,
          quantity: true,
          price: true,
          menu_id: true,
          menu: {
            select: {
              id: true,
              name: true,
              image: true, 
              price: true
            }
          }
        }
      },
      // user:true
      user: {
        select: {
          id:true,
          name:true
        }
      }
    }
  });

  if (!order) {
    console.log("No order found or unauthorized access");
  }

  return order;
}

export const getStatsOrderUser = async (user_id: string) => {
  const [totalOrders, statusGroup] = await Promise.all([
    prisma.order.count({
      where: { user_id }
    }),
    prisma.order.groupBy({
      by: ['status'],
      where: { user_id },
      _count: {
        status: true
      }
    })
  ])

  const pending = statusGroup.find(s => s.status === 'PENDING')?._count.status || 0;
  const confirmed = statusGroup.find(s => s.status === 'CONFIRMED')?._count.status || 0;
  const preparing = statusGroup.find(s => s.status === 'PREPARING')?._count.status || 0;
  const outForDelivery = statusGroup.find(s => s.status === 'OUT_FOR_DELIVERY')?._count.status || 0;
  const delivered = statusGroup.find(s => s.status === 'DELIVERED')?._count.status || 0;
  const cancelled = statusGroup.find(s => s.status === 'CANCELLED')?._count.status || 0;

  return { totalOrders, pending, confirmed, preparing, outForDelivery, delivered, cancelled }
}


// ---------------- Mutation Action ------------------
export const createOrder = async (data: CreateOrderInput) => {
  const { items, user_id, deliveryFee, orderNumber, ...customerDetails } = data;
  // console.log(data)

  const checkedMenu = await prisma.menu.findMany({
    where: {
      id: { in: data.items.map(i => i.mealId) }
    }
  });

  if (checkedMenu.length !== data.items.length) {
    throw new Error("One or more menu items are invalid")
  }

  let subTotal = 0;
  const orderItemsData = [];

  for (const item of items) {
    if (item.quantity <= 0) {
      throw new Error("Quantity must be greater than zero")
    }

    const price = Number(item.price);
    subTotal += (price) * item.quantity;

    orderItemsData.push({
      menu_id: item.mealId,
      quantity: item.quantity,
      price: price
    })
  };


  const totalAmount = subTotal + deliveryFee || 5;

  const result = await prisma.order.create({
    data: {
      orderNumber: orderNumber,
      subtotal: subTotal,
      deliveryFee: deliveryFee || 5.00,
      totalAmount: totalAmount,
      customerName: customerDetails.customerName,
      customerPhone: customerDetails.customerPhone,
      deliveryAddress: customerDetails.deliveryAddress,
      deliveryNote: customerDetails.deliveryNote ?? null,
      user_id: user_id,
      items: {
        create: orderItemsData
      }
    },
    include: {
      items: true
    }
  });

  return result;
}

export const updateOrderStatus = async (orderId: string, status: orderStatus) => {
 
  try {
    const result = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status,
      },
      // include: {
      //   user: {
      //      select: { name: true, email: true } 
      //   }
      // }
    });

    return result;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw new Error(`Failed to update order status. Order ${orderId} may not exist.`);
  }
}



export const orederServices = { createOrder, getAllOrders, getSingleOrder, getStatsOrderUser,updateOrderStatus }





// Utility function to generate unique order numbers
export const generateOrderNumber = (): string => {
  // Example: ORD-20240610-123456 (ORD-YYYYMMDD-random6digits)
  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.floor(100000 + Math.random() * 900000).toString();
  return `ORD-${datePart}-${randomPart}`;
};


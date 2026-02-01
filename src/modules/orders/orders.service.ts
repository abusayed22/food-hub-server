import { order } from "../../../generated/prisma/client"
import { prisma } from "../../../lib/prisma"


type CreateOrderInput = {
    items: { menu_id: string, quantity: number, price: number }[];
    user_id: string
    customerName: string
    customerPhone: string
    deliveryAddress: string
    deliveryNote?: string
    deliveryFee: number
}


export const getAllOrders = async (user_id: string) => {
    const orders = await prisma.order.findMany({
        where: { user_id }
    })

    return orders;
}

export const getSingleOrder = async (orderId: string, user_id: string) => {
    const orders = await prisma.order.findUnique({
        where: { id: orderId }
    });

    return orders;
}


// ---------------- Mutation Action ------------------
export const createOrder = async (data: CreateOrderInput) => {
    const { items, user_id, deliveryFee, ...customerDetails } = data;

    const checkedMenu = await prisma.menu.findMany({
        where: {
            id: { in: data.items.map(i => i.menu_id) }
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
        subTotal += price * item.quantity;

        orderItemsData.push({
            menu_id: item.menu_id,
            quantity: item.quantity,
            price: price
        })
    };

    const totalAmount = subTotal + deliveryFee;

    const result = await prisma.order.create({
        data: {
            orderNumber: generateOrderNumber(),
            subtotal: subTotal,
            deliveryFee: deliveryFee,
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



export const orederServices = { createOrder, getAllOrders, getSingleOrder }





// Utility function to generate unique order numbers
export const generateOrderNumber = (): string => {
    // Example: ORD-20240610-123456 (ORD-YYYYMMDD-random6digits)
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, "");
    const randomPart = Math.floor(100000 + Math.random() * 900000).toString();
    return `ORD-${datePart}-${randomPart}`;
};


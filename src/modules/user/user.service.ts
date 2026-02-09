import { Prisma } from "../../../generated/prisma/client";
import { orderStatus } from "../../../generated/prisma/enums";
import { UserWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../../lib/prisma";
import { GetOrdersParams, PaginationOptions } from "../orders/orders.service";




interface GetUsersParams {
  search?: string;
  role?: string;
  status?: string;
  verified?: string;
  page?: number | string;
  limit?: number | string;
  sortBy?: string
  sortOrder?: 'asc' | 'desc';
}



export const adminGetUsers = async (filters: GetUsersParams, paginationOptions: PaginationOptions) => {
  try {

    const { search, status, role, verified } = filters;
    const { page = 1, limit, sortBy = 'createdAt', sortOrder = 'desc' } = paginationOptions;


    const pageNumber = Number(page) > 0 ? Number(page) : 1;
    const limitNumber = Number(limit) > 0 ? Number(limit) : 10;
    const skip = (pageNumber - 1) * limitNumber;


    const andConditions: Prisma.UserWhereInput[] = [];

    if (search) {
      const searchTerm = search.trim();
      if (searchTerm.length > 0) {
      andConditions.push({
        OR: [
          { name: { contains: searchTerm, mode: "insensitive" } },
          
          { email: { contains: searchTerm, mode: "insensitive" } },
          
          { id: { contains: searchTerm, mode: "insensitive" } },
        ],
      });
    }
    }

    if (role && role !== "ALL") {
      andConditions.push({ role: role as any });
    }

    if (status && status !== "ALL") {
      andConditions.push({ status: status as any });
    }

    if (verified !== undefined && verified !== "ALL") {
      const isVerified = String(verified) === 'true';
      andConditions.push({ emailVerified: isVerified });
    }

    const whereConditions: Prisma.UserWhereInput = 
      andConditions.length > 0 ? { AND: andConditions } : {};

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: whereConditions,
        skip,
        take: limitNumber,
        orderBy: {
          [sortBy]: sortOrder,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          role: true,
          status: true,
          emailVerified: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.user.count({ where: whereConditions }),
    ]);


    return {
      data: users,
      meta: {
        page: pageNumber,
        limit: limitNumber,
        total,
        totalPages: Math.ceil(total / limitNumber),
      },
    };

  } catch (error) {
    console.error("Error fetching users:", error);
    // Return empty state on error so UI doesn't crash
    return {
      success: false,
      data: [],
      meta: { page: 1, limit: 10, total: 0, totalPages: 0 },
      error: "Failed to fetch users"
    };
  }
};


export async function updateUserStatus(userId: string, newStatus: string) {
  try {

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { 
        status: newStatus
      },
    });


    return { data: updatedUser,error: null };

  } catch (error) {
    console.error(`Error updating status for user ${userId}:`, error);
    return { success: false, error: "Failed to update user status" };
  }
}





export const userServices = { adminGetUsers ,updateUserStatus}

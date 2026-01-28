import { menuWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../../lib/prisma"


export const getAllMeals = async ({ search, categories, user_id, page, limit, skip, order, orderBy }: { search: string, categories: string[], user_id: string | undefined, page: number, limit: number, skip: number, orderBy: string, order: string }) => {
    const andCondition: menuWhereInput[] = [];

    // if have search value
    if (search) {
        andCondition.push({
            OR: [{
                name: {
                    contains: search,
                    mode: "insensitive"
                }
            },
            {
                category: {
                    has: search
                }
            }
            ]
        })
    };

    // if have categories value
    if (categories.length > 0) {
        andCondition.push({
            category: {
                hasEvery: categories
            }
        })
    }

    // if have user_id
    if (user_id) {
        andCondition.push({
            user_id
        })
    }

    const res = await prisma.menu.findMany({
        take: limit,
        skip,
        where: {
            AND: andCondition
        },

        orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : { createdAt: 'desc' },
        include: {
            _count: {
                select: {
                    review: true
                }
            }
        }
    });

    const total = await prisma.menu.count({
        where: {
            AND: andCondition
        },
    });


    return {
        data: res,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    }




};








export const mealsService = { getAllMeals }
import { string } from './../../../node_modules/zod/src/v4/core/regexes';
import { menuWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../../lib/prisma"
import { menu } from '../../../generated/prisma/client';


export const getAllMeals = async ({ search, category_id, page, limit, skip, order, orderBy }: { search: string, category_id: string |undefined,  page: number, limit: number, skip: number, orderBy: string, order: string }) => {
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
            ]
        })
    };

    // if have categories value
    if (category_id) {
        andCondition.push({
            category_id
        })
    }

    // if have user_id


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


// -------------------- POST -------------------
export const createMeal = async(data:Omit<menu,'id'|'createdAt'|'updateAt' >,user_id:string) => {
    const result = await prisma.menu.create({
        data
    });

    return result
}





export const mealsService = { getAllMeals,createMeal }
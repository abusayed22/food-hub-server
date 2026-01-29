import { string } from './../../../node_modules/zod/src/v4/core/regexes';
import { menuWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../../lib/prisma"
import { menu } from '../../../generated/prisma/client';


export const getAllMeals = async ({ category_id, cuisine, dietary, minPrice, maxPrice, page, limit, skip, order, orderBy }: { category_id: string | undefined, cuisine: string | undefined, dietary: string | undefined, minPrice: string | undefined, maxPrice: string | undefined, page: number, limit: number, skip: number, orderBy: string, order: string }) => {
    const andCondition: menuWhereInput[] = [];
    

    // if have cuisine search value
    if (cuisine) {
        andCondition.push({
            OR: [{
                name: {
                    contains: cuisine,
                    mode: "insensitive"
                },
                description:{
                    contains: cuisine,
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

    // if have cuisine
    // if(cuisine){
    //     andCondition.push({
    //         cu
    //     })
    // }


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


// -------------------- Mutation type actions -------------------
export const createMeal = async (data: Omit<menu, 'id' | 'createdAt' | 'updateAt'>, user_id: string) => {
    const result = await prisma.menu.create({
        data
    });

    return result
}

export const updateMeal = async (data: Partial<menu>, mealId: string) => {

    const menuData = await prisma.menu.findUniqueOrThrow({
        where: {
            id:mealId
        }
    });

    // if (!isAdmin && (postData.user_id !== user_id)) {
    //     throw new Error("Not permited the post update!");
    // };

    // if (!isAdmin) {
    //     delete data.isFeatured
    // }

    if(!menuData){
        throw new Error("Meal not found!")
    }

    const result = await prisma.menu.update({
        where: {
            id:mealId
        },
        data
    });

    return result
}

export const deleteMeal = async (mealId: string) => {

    const existMenu = await prisma.menu.findUniqueOrThrow({
        where: {
            id:mealId
        },
        select:{
            id:true
        }
    });


    if(!existMenu){
        throw new Error("Meal not found!")
    }

    const result = await prisma.menu.delete({
        where: {
            id:mealId
        }
    });

    return result
}

export const getSingleMeal = async(mealId:string) => {
    return await prisma.menu.findUniqueOrThrow({
        where:{
            id:mealId
        },
        include:{
            category:true,
            _count:{
                select:{
                    review:true
                }
            },
            review:true
        }
    })
}





export const mealsService = { getAllMeals, createMeal,updateMeal,getSingleMeal,deleteMeal }
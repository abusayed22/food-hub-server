import { string } from './../../../node_modules/zod/src/v4/core/regexes';
import { menuWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../../lib/prisma"
import { menu } from '../../../generated/prisma/client';

// limit?: string
//     page?: string

interface Filters {
    user_id?: string;
    search?: string;
    category_id?: string;
    minPrice?: number;
    maxPrice?: number;
    isFeatured?: boolean;
    isSignature?: boolean;
    isNew?: boolean;
    isAvailable?: boolean;
    tags?: string[];
}

interface PaginationOptions {
    page?: number | string;
    limit?: number | string;
    skip?: number | string;
    orderBy?: string;
    order?: 'asc' | 'desc';
}


export const getAllMeals = async (filters:Filters,paginationOption:PaginationOptions) => {
    
    const {user_id,isFeatured,tags,search,category_id,maxPrice,minPrice,isSignature,isNew,isAvailable} = filters;
    const {orderBy,order} = paginationOption;
    const page = Number(paginationOption.page) || 1; 
    const limit = Number(paginationOption.limit) || 10; 
    const skip = Number(paginationOption.skip) || (page - 1) * limit;
    const andCondition: menuWhereInput[] = [];
    
    console.log("user id",user_id)

    // if have cuisine search value
    if (search) {
        const searchTerms = search.trim().split(/\s+/);

        searchTerms.forEach((term) => {
            andCondition.push({
                OR: [
                    { 
                        name: { 
                            contains: term, 
                            mode: "insensitive" 
                        } 
                    },
                    { 
                        description: { 
                            contains: term, 
                            mode: "insensitive" 
                        } 
                    }
                ]
            });
        });
    };

    // if have isFeatured value
    if(isFeatured !== undefined){
        andCondition.push({
            isFeatured
        })
    }

    // if have user_id value
    if (user_id) {
        // Ensure we don't filter for the string "undefined" or "null" by accident
        // and trim any accidental whitespace
        const cleanId = user_id.trim();
        
        if (cleanId && cleanId !== 'undefined' && cleanId !== 'null') {
            andCondition.push({
                user_id: cleanId
            });
        }
    }

    // if have minPrice value
    if (minPrice !== undefined) {
        andCondition.push({
            price:{
                gte:minPrice
            }
        })
    }
    
    // if have maxPrice value
    if (maxPrice !== undefined) {
        andCondition.push({
            price:{
                lte:maxPrice
            }
        })
    }

    // if have tags value
    if (tags && tags.length > 0) {
        andCondition.push({
            tags: { hasSome: tags }
        })
    }
    
    // if have isSignature value
    if(isSignature !== undefined){
        andCondition.push({
            isSignature
        })
    }

    // if have isAvailable value
    if(isAvailable !== undefined){
        andCondition.push({
            isAvailable
        })
    }

    // if have isSignature value
    if(isNew !== undefined){
        andCondition.push({
            isNew
        })
    }

    // if have categories value
    if (category_id) {
        andCondition.push({
            category_id
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


// -------------------- Mutation type actions -------------------
export const createMeal = async (data: Omit<menu, 'id' | 'createdAt' | 'updateAt'|'isAvailable'|'isFeatured'|'isNew'|'isSignature'>, user_id: string) => {

    try {
        const result = await prisma.menu.create({
            data: {
                ...data,
                user_id,
                price: Number(data.price) // Safety cast
            }
        });
        return result;
    } catch (error) {
        console.error("Prisma Create Error:", error); // <--- CHECK THIS LOG
        throw error;
    }
}


export const updateMeal = async (data: Partial<menu>, mealId: string) => {

    await prisma.menu.findUniqueOrThrow({
        where: { id: mealId },
    });

    
    const { 
        id, 
        createdAt, 
        updateAt, 
        _count, 
        user_id, 
        ...cleanData 
    } = data as any; 


    const result = await prisma.menu.update({
        where: {
            id: mealId
        },
        data: {
            ...cleanData,
            price: cleanData.price ? Number(cleanData.price) : undefined
        }
    });

    return result;
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
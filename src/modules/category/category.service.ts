import { string } from './../../../node_modules/zod/src/v4/core/regexes';
import { menuWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../../lib/prisma"
import { categories, categoryStatus, menu } from '../../../generated/prisma/client';


export const getAllCategories = async () => {
    

    const res = await prisma.categories.findMany({

        where: {
           status: categoryStatus.ACTIVE
        },
        select:{
            id:true,
            name:true
        }

        // orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : { createdAt: 'desc' },
        // include: {
        //     _count: {
        //         select: {
        //             review: true
        //         }
        //     }
        // }
    });

    


    return {
        data: res,
    }




};


// -------------------- POST -------------------
export const createCategory = async(data: Omit<categories, "id" | "createdAt" | "updatedAt" | "status">) => {
    const result = await prisma.categories.create({
        data
    })

    return{data:result}
}
export const categoryUpdate = async(data: Omit<categories,  "createdAt" | "updateAt" | "status">) => {
    const result = await prisma.categories.update({
        where:{
            id:data.id
        },
        data
    })

    return{data:result}
}





export const categoryService = { getAllCategories,createCategory,categoryUpdate }
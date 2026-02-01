import { prisma } from "../../../lib/prisma";
import { categoryStatus } from '../../../generated/prisma/client';
export const getAllCategories = async () => {
    const res = await prisma.categories.findMany({
        where: {
            status: categoryStatus.ACTIVE
        },
        select: {
            id: true,
            name: true
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
    };
};
// -------------------- POST -------------------
export const createCategory = async (data) => {
    const result = await prisma.categories.create({
        data
    });
    return { data: result };
};
export const categoryUpdate = async (data) => {
    const result = await prisma.categories.update({
        where: {
            id: data.id
        },
        data
    });
    return { data: result };
};
export const categoryService = { getAllCategories, createCategory, categoryUpdate };
//# sourceMappingURL=category.service.js.map
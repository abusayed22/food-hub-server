import { categories, categoryStatus } from '../../../generated/prisma/client';
export declare const getAllCategories: () => Promise<{
    data: {
        name: string;
        id: string;
    }[];
}>;
export declare const createCategory: (data: Omit<categories, "id" | "createdAt" | "updatedAt" | "status">) => Promise<{
    data: {
        name: string;
        status: categoryStatus;
        id: string;
        createdAt: Date;
        updateAt: Date;
    };
}>;
export declare const categoryUpdate: (data: Omit<categories, "createdAt" | "updateAt" | "status">) => Promise<{
    data: {
        name: string;
        status: categoryStatus;
        id: string;
        createdAt: Date;
        updateAt: Date;
    };
}>;
export declare const categoryService: {
    getAllCategories: () => Promise<{
        data: {
            name: string;
            id: string;
        }[];
    }>;
    createCategory: (data: Omit<categories, "id" | "createdAt" | "updatedAt" | "status">) => Promise<{
        data: {
            name: string;
            status: categoryStatus;
            id: string;
            createdAt: Date;
            updateAt: Date;
        };
    }>;
    categoryUpdate: (data: Omit<categories, "createdAt" | "updateAt" | "status">) => Promise<{
        data: {
            name: string;
            status: categoryStatus;
            id: string;
            createdAt: Date;
            updateAt: Date;
        };
    }>;
};
//# sourceMappingURL=category.service.d.ts.map
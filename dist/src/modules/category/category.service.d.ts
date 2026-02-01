import { categories, categoryStatus } from '../../../generated/prisma/client';
export declare const getAllCategories: () => Promise<{
    data: {
        id: string;
        name: string;
    }[];
}>;
export declare const createCategory: (data: Omit<categories, "id" | "createdAt" | "updatedAt" | "status">) => Promise<{
    data: {
        status: categoryStatus;
        id: string;
        createdAt: Date;
        name: string;
        updateAt: Date;
    };
}>;
export declare const categoryUpdate: (data: Omit<categories, "createdAt" | "updateAt" | "status">) => Promise<{
    data: {
        status: categoryStatus;
        id: string;
        createdAt: Date;
        name: string;
        updateAt: Date;
    };
}>;
export declare const categoryService: {
    getAllCategories: () => Promise<{
        data: {
            id: string;
            name: string;
        }[];
    }>;
    createCategory: (data: Omit<categories, "id" | "createdAt" | "updatedAt" | "status">) => Promise<{
        data: {
            status: categoryStatus;
            id: string;
            createdAt: Date;
            name: string;
            updateAt: Date;
        };
    }>;
    categoryUpdate: (data: Omit<categories, "createdAt" | "updateAt" | "status">) => Promise<{
        data: {
            status: categoryStatus;
            id: string;
            createdAt: Date;
            name: string;
            updateAt: Date;
        };
    }>;
};
//# sourceMappingURL=category.service.d.ts.map
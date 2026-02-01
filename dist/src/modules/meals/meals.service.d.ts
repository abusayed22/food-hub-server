import { menu } from '../../../generated/prisma/client';
export declare const getAllMeals: ({ category_id, cuisine, dietary, minPrice, maxPrice, page, limit, skip, order, orderBy }: {
    category_id: string | undefined;
    cuisine: string | undefined;
    dietary: string | undefined;
    minPrice: string | undefined;
    maxPrice: string | undefined;
    page: number;
    limit: number;
    skip: number;
    orderBy: string;
    order: string;
}) => Promise<{
    data: ({
        _count: {
            review: number;
        };
    } & {
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        category_id: string;
        isAvailable: boolean;
        price: number;
        iamge: string | null;
        updateAt: Date;
    })[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}>;
export declare const createMeal: (data: Omit<menu, "id" | "createdAt" | "updateAt">, user_id: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    description: string | null;
    category_id: string;
    isAvailable: boolean;
    price: number;
    iamge: string | null;
    updateAt: Date;
}>;
export declare const updateMeal: (data: Partial<menu>, mealId: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    description: string | null;
    category_id: string;
    isAvailable: boolean;
    price: number;
    iamge: string | null;
    updateAt: Date;
}>;
export declare const deleteMeal: (mealId: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    description: string | null;
    category_id: string;
    isAvailable: boolean;
    price: number;
    iamge: string | null;
    updateAt: Date;
}>;
export declare const getSingleMeal: (mealId: string) => Promise<{
    review: {
        id: string;
        createdAt: Date;
        updateAt: Date;
        menu_id: string;
        comment: string | null;
        parent_id: string | null;
    }[];
    category: {
        status: import("../../../generated/prisma/enums").categoryStatus;
        id: string;
        createdAt: Date;
        name: string;
        updateAt: Date;
    };
    _count: {
        review: number;
    };
} & {
    id: string;
    createdAt: Date;
    name: string;
    description: string | null;
    category_id: string;
    isAvailable: boolean;
    price: number;
    iamge: string | null;
    updateAt: Date;
}>;
export declare const mealsService: {
    getAllMeals: ({ category_id, cuisine, dietary, minPrice, maxPrice, page, limit, skip, order, orderBy }: {
        category_id: string | undefined;
        cuisine: string | undefined;
        dietary: string | undefined;
        minPrice: string | undefined;
        maxPrice: string | undefined;
        page: number;
        limit: number;
        skip: number;
        orderBy: string;
        order: string;
    }) => Promise<{
        data: ({
            _count: {
                review: number;
            };
        } & {
            id: string;
            createdAt: Date;
            name: string;
            description: string | null;
            category_id: string;
            isAvailable: boolean;
            price: number;
            iamge: string | null;
            updateAt: Date;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    createMeal: (data: Omit<menu, "id" | "createdAt" | "updateAt">, user_id: string) => Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        category_id: string;
        isAvailable: boolean;
        price: number;
        iamge: string | null;
        updateAt: Date;
    }>;
    updateMeal: (data: Partial<menu>, mealId: string) => Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        category_id: string;
        isAvailable: boolean;
        price: number;
        iamge: string | null;
        updateAt: Date;
    }>;
    getSingleMeal: (mealId: string) => Promise<{
        review: {
            id: string;
            createdAt: Date;
            updateAt: Date;
            menu_id: string;
            comment: string | null;
            parent_id: string | null;
        }[];
        category: {
            status: import("../../../generated/prisma/enums").categoryStatus;
            id: string;
            createdAt: Date;
            name: string;
            updateAt: Date;
        };
        _count: {
            review: number;
        };
    } & {
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        category_id: string;
        isAvailable: boolean;
        price: number;
        iamge: string | null;
        updateAt: Date;
    }>;
    deleteMeal: (mealId: string) => Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        category_id: string;
        isAvailable: boolean;
        price: number;
        iamge: string | null;
        updateAt: Date;
    }>;
};
//# sourceMappingURL=meals.service.d.ts.map
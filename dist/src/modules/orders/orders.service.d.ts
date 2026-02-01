type CreateOrderInput = {
    items: {
        menu_id: string;
        quantity: number;
        price: number;
    }[];
    user_id: string;
    customerName: string;
    customerPhone: string;
    deliveryAddress: string;
    deliveryNote?: string;
    deliveryFee: number;
};
export declare const getAllOrders: (user_id: string) => Promise<{
    status: import("../../../generated/prisma/enums").orderStatus;
    id: string;
    createdAt: Date;
    updateAt: Date;
    user_id: string;
    orderNumber: string;
    subtotal: number;
    deliveryFee: number;
    totalAmount: number;
    paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
    paymentMethod: import("../../../generated/prisma/enums").PaymentMethod;
    customerName: string;
    customerPhone: string;
    deliveryAddress: string;
    deliveryNote: string | null;
}[]>;
export declare const getSingleOrder: (orderId: string, user_id: string) => Promise<{
    status: import("../../../generated/prisma/enums").orderStatus;
    id: string;
    createdAt: Date;
    updateAt: Date;
    user_id: string;
    orderNumber: string;
    subtotal: number;
    deliveryFee: number;
    totalAmount: number;
    paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
    paymentMethod: import("../../../generated/prisma/enums").PaymentMethod;
    customerName: string;
    customerPhone: string;
    deliveryAddress: string;
    deliveryNote: string | null;
} | null>;
export declare const createOrder: (data: CreateOrderInput) => Promise<{
    items: {
        id: string;
        createdAt: Date;
        price: number;
        updateAt: Date;
        quantity: number;
        menu_id: string;
        order_id: string;
    }[];
} & {
    status: import("../../../generated/prisma/enums").orderStatus;
    id: string;
    createdAt: Date;
    updateAt: Date;
    user_id: string;
    orderNumber: string;
    subtotal: number;
    deliveryFee: number;
    totalAmount: number;
    paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
    paymentMethod: import("../../../generated/prisma/enums").PaymentMethod;
    customerName: string;
    customerPhone: string;
    deliveryAddress: string;
    deliveryNote: string | null;
}>;
export declare const orederServices: {
    createOrder: (data: CreateOrderInput) => Promise<{
        items: {
            id: string;
            createdAt: Date;
            price: number;
            updateAt: Date;
            quantity: number;
            menu_id: string;
            order_id: string;
        }[];
    } & {
        status: import("../../../generated/prisma/enums").orderStatus;
        id: string;
        createdAt: Date;
        updateAt: Date;
        user_id: string;
        orderNumber: string;
        subtotal: number;
        deliveryFee: number;
        totalAmount: number;
        paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
        paymentMethod: import("../../../generated/prisma/enums").PaymentMethod;
        customerName: string;
        customerPhone: string;
        deliveryAddress: string;
        deliveryNote: string | null;
    }>;
    getAllOrders: (user_id: string) => Promise<{
        status: import("../../../generated/prisma/enums").orderStatus;
        id: string;
        createdAt: Date;
        updateAt: Date;
        user_id: string;
        orderNumber: string;
        subtotal: number;
        deliveryFee: number;
        totalAmount: number;
        paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
        paymentMethod: import("../../../generated/prisma/enums").PaymentMethod;
        customerName: string;
        customerPhone: string;
        deliveryAddress: string;
        deliveryNote: string | null;
    }[]>;
    getSingleOrder: (orderId: string, user_id: string) => Promise<{
        status: import("../../../generated/prisma/enums").orderStatus;
        id: string;
        createdAt: Date;
        updateAt: Date;
        user_id: string;
        orderNumber: string;
        subtotal: number;
        deliveryFee: number;
        totalAmount: number;
        paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
        paymentMethod: import("../../../generated/prisma/enums").PaymentMethod;
        customerName: string;
        customerPhone: string;
        deliveryAddress: string;
        deliveryNote: string | null;
    } | null>;
};
export declare const generateOrderNumber: () => string;
export {};
//# sourceMappingURL=orders.service.d.ts.map
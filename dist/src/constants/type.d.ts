export type * from "./role.type";
export type CreateOrderInput = {
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
//# sourceMappingURL=type.d.ts.map
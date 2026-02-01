export declare const categoryStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DEACTIVE: "DEACTIVE";
};
export type categoryStatus = (typeof categoryStatus)[keyof typeof categoryStatus];
export declare const orderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly PREPARING: "PREPARING";
    readonly READY: "READY";
    readonly OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type orderStatus = (typeof orderStatus)[keyof typeof orderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentMethod: {
    readonly CASH_ON_DELIVERY: "CASH_ON_DELIVERY";
    readonly ONLINE: "ONLINE";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
//# sourceMappingURL=enums.d.ts.map
import { Request, Response } from "express";
export declare const createOrder: (req: Request, res: Response) => Promise<void>;
export declare const getAllOrders: (req: Request, res: Response) => Promise<void>;
export declare const getSingleOrder: (req: Request, res: Response) => Promise<void>;
export declare const ordersController: {
    createOrder: (req: Request, res: Response) => Promise<void>;
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getSingleOrder: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=orders.controller.d.ts.map
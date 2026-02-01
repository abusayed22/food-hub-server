import { Request, Response } from "express"
import { orederServices } from "./orders.service";


export const createOrder = async (req: Request, res: Response) => {
    try {
        const user_id = req.user?.id;
        const data = req.body;

        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await orederServices.createOrder({...data,user_id: user_id as string})
        res.status(201).json(result)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
}

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const user_id = req.user?.id;

        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await orederServices.getAllOrders(user_id as string)
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
}

export const getSingleOrder = async (req: Request, res: Response) => {
    try {
        const {orderId} = req.params
        const user_id = req.user?.id;

        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await orederServices.getSingleOrder(orderId as string,user_id as string)
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
}





export const ordersController = {createOrder,getAllOrders,getSingleOrder}

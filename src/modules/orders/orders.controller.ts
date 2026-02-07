import { Request, Response } from "express"
import { orederServices } from "./orders.service";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { orderStatus } from "../../../generated/prisma/enums";



const removeUndefined = (obj: Record<string, any>) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    });
    return obj;
};



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

async function getAllOrder(req: Request, res: Response) {
    try {
        const filters = removeUndefined({
            provider_id: req.query.provider_id as string | undefined,
            search: req.query.search as string | undefined,
            category_id: req.query.category_id as string | undefined,
            startDate: req.query.startDate ? req.query.startDate : undefined,
            endDate: req.query.endDate ? req.query.endDate : undefined,
            status: req.query.status ? req.query.status : undefined,
        });


        const paginationOptions = paginationSortingHelper(req.query)

        const result = await orederServices.getAllOrders(filters,paginationOptions);
        res.status(200).json(result);
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
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
export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        const user_id = req.user?.id; 

        if (!user_id) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized! Please log in." 
            });
        }

        const result = await orederServices.updateOrderStatus(orderId as string,status as orderStatus);
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
}


export const getStatsOrderUser = async (req: Request, res: Response) => {
    try {
        const user_id = req.user?.id;

        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await orederServices.getStatsOrderUser(user_id as string);
        console.log(result)
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
}





export const ordersController = {createOrder,getAllOrder,getSingleOrder,getStatsOrderUser,updateOrderStatus}

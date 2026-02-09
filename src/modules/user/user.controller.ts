import { Request, Response } from "express";
import { Role } from "../../constants/role.type";
import { userServices } from "./user.service";
import { removeUndefined } from "../../helper/removeUndefined";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { orederServices } from "../orders/orders.service";



async function adminGetUsers(req: Request, res: Response) {
    try {
        const filters = removeUndefined({
            search: req.query.search as string | undefined,
            role: req.query.role as string | undefined,
            startDate: req.query.startDate ? req.query.startDate : undefined,
            endDate: req.query.endDate ? req.query.endDate : undefined,
            status: req.query.status ? req.query.status : undefined,
            verified: req.query.verified ? req.query.status : undefined,
        });

        

        const paginationOptions = paginationSortingHelper(req.query)

        const result = await userServices.adminGetUsers(filters,paginationOptions);
        res.status(200).json(result);
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
    }
}
async function adminupdateUser(req: Request, res: Response) {
    try {
        const { status,userId } = req.body;
        const user_id = req.user?.id; 

        if (!user_id) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized! Please log in." 
            });
        }

        const result = await userServices.updateUserStatus(status as string,userId as string);
        res.status(200).json(result);
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
    }
}
 





export const userController = {adminGetUsers,adminupdateUser}

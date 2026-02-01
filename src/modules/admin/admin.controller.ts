import { Request, Response } from "express"
import { adminService } from "./admin.service"


async function getAllUsers(req:Request,res:Response) {
    try {
        const user_id = req.user?.id
        const result = await adminService.getAllUsers(user_id as string)
        return  res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch users"
        })
    }
}



export const adminController = {
    getAllUsers
}
import { Router } from "express"
import authMiddleware from "../../middleware/auth/authMiddleware";
import { Role } from "../../constants/role.type";
import { userController } from "./user.controller";


const route = Router();



route.get("/admin",authMiddleware(Role.admin),userController.adminGetUsers)
route.patch("/admin",authMiddleware(Role.admin),userController.adminupdateUser)



export const userRoute:Router = route


import { Router } from "express"
import authMiddleware from "../../middleware/auth/authMiddleware";
import { Role } from "../../constants/role.type";
import { ordersController } from "./orders.controller";

const route = Router();

route.post("/",authMiddleware(Role.customer),ordersController.createOrder)
route.get("/",authMiddleware(Role.customer,Role.provider,Role.admin),ordersController.getAllOrders)
route.get("/details/:orderId",authMiddleware(Role.customer),ordersController.getSingleOrder)



export const orderRoute:Router = route


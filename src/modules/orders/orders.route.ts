import { Router } from "express"
import authMiddleware from "../../middleware/auth/authMiddleware";
import { Role } from "../../constants/role.type";
import { ordersController } from "./orders.controller";

const route = Router();

route.post("/",authMiddleware(Role.customer),ordersController.createOrder)
route.get("/",authMiddleware(Role.customer,Role.provider,Role.admin),ordersController.getAllOrder)
route.get("/details/:orderId",authMiddleware(Role.customer,Role.provider),ordersController.getSingleOrder)
route.patch("/details/:orderId",authMiddleware(Role.customer,Role.provider),ordersController.updateOrderStatus)
route.get("/stats",authMiddleware(Role.customer),ordersController.getStatsOrderUser)



export const orderRoute:Router = route


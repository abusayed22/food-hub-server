import { Router } from "express";
import authMiddleware from "../../middleware/auth/authMiddleware";
import { categoryController } from "./category.controller";
import { Role } from "../../constants/role.type";





const route = Router()

route.get("/",categoryController.getAllCategories);
route.post("/",authMiddleware(Role.admin),categoryController.createCategory); 
route.patch("/",authMiddleware(Role.admin),categoryController.categoryUpdate); 




export const categoryRoute:Router = route

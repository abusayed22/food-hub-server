import { Request, Response, Router } from "express";
import { app } from "../../app";
import { mealsController } from "./meals.controller";
import authMiddleware from "../../middleware/auth/authMiddleware";
import { Role } from "../../constants/role.type";


const route = Router()

route.get("/",mealsController.getAllMeals);
route.post("/",authMiddleware(Role.admin,Role.provider),mealsController.createMeal);




export const mealsRoute:Router = route
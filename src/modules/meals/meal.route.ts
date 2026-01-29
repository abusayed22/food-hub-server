import { Request, Response, Router } from "express";
import { app } from "../../app";
import { mealsController } from "./meals.controller";
import authMiddleware from "../../middleware/auth/authMiddleware";
import { Role } from "../../constants/role.type";


const route = Router()

route.get("/",mealsController.getAllMeals);
route.post("/",authMiddleware(Role.admin,Role.provider),mealsController.createMeal);
route.patch("/:mealId",authMiddleware(Role.admin,Role.provider,Role.customer),mealsController.updateMeal); // TODO: remove customer route
route.delete("/:mealId",authMiddleware(Role.admin,Role.provider,Role.customer),mealsController.deleteMeal); // TODO: remove customer route
route.get("/details/:mealId",authMiddleware(Role.admin,Role.provider,Role.customer),mealsController.getSingleMeal); // TODO: remove customer route




export const mealsRoute:Router = route
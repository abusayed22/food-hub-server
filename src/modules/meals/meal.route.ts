import { Request, Response, Router } from "express";
import { app } from "../../app";
import { mealsController } from "./meals.controller";


const route = Router()

route.get("/",mealsController.getAllMeals);




export const mealsRoute:Router = route
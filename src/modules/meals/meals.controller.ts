import { NextFunction, Request, Response } from "express";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { mealsService } from "./meals.service";
import { Role } from "../../constants/role.type";


 async function getAllMeals (req:Request,res:Response,next:NextFunction){
    try {
        const { cuisine } = req.query
        const cuisineString = typeof cuisine === 'string' ? cuisine : "";
        const user_id = req.query.user_id as string | undefined;
        const category_id = req.query.category_id as string | undefined;
        const dietary = req.query.dietary as string | undefined;
        const minPrice = req.query.minPrice as string | undefined;
        const maxPrice = req.query.maxPrice as string | undefined;

        const {page,limit,skip,orderBy,order} = paginationSortingHelper(req.query)

        const result = await mealsService.getAllMeals({ cuisine: cuisineString,dietary,minPrice,maxPrice, category_id,page,limit,skip,orderBy,order });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
    }
}


async function createMeal(req:Request,res:Response,next:NextFunction) {
    try {
        const user = req.user
        const user_id = user?.id
        if(!user){
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await mealsService.createMeal(req.body,user_id as string)
        return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

async function updateMeal(req:Request,res:Response,next:NextFunction) {
    try {
        const user = req.user
        const user_id = user?.id;
        const isAdmin = user?.role === Role.admin
        const { mealId } = req.params;

        if(!user){
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await mealsService.updateMeal(req.body,mealId as string)
        return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

async function deleteMeal(req:Request,res:Response,next:NextFunction) {
    try {
        const user = req.user
        const { mealId } = req.params;

        if(!user){
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await mealsService.deleteMeal(mealId as string)
        return res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}


async function getSingleMeal(req:Request,res:Response,next:NextFunction) {
    
    try {
        const { mealId } = req.params;

    const result = await mealsService.getSingleMeal(mealId as string)
    return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        next(error)
    }


}



export const mealsController = {getAllMeals,createMeal,updateMeal,getSingleMeal,deleteMeal}
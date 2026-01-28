import { NextFunction, Request, Response } from "express";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { mealsService } from "./meals.service";


 async function getAllMeals (req:Request,res:Response,next:NextFunction){
    try {
        const { search } = req.query

        const searchString = typeof search === 'string' ? search : "";
        const user_id = req.query.user_id as string | undefined;
        const category_id = req.query.category_id as string | undefined;

        const {page,limit,skip,orderBy,order} = paginationSortingHelper(req.query)

        const result = await mealsService.getAllMeals({ search: searchString, category_id,page,limit,skip,orderBy,order });
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
        return result;
    } catch (error) {
        next(error)
    }
}





export const mealsController = {getAllMeals,createMeal}
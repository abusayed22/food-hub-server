import { Request, Response } from "express";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { mealsService } from "./meals.service";


 async function getAllMeals (req:Request,res:Response){
    try {
        const { search } = req.query
        const categoryType = req.query.categories ? (req.query.categories as string).split(",") : [];
        const searchString = typeof search === 'string' ? search : "";
        const user_id = req.query.user_id as string | undefined;

        const {page,limit,skip,orderBy,order} = paginationSortingHelper(req.query)

        const result = await mealsService.getAllMeals({ search: searchString, categories: categoryType,user_id,page,limit,skip,orderBy,order });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
    }
}





export const mealsController = {getAllMeals}
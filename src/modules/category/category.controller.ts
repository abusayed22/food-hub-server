import { NextFunction, Request, Response } from "express";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { categoryService } from "./category.service";


 async function getAllCategories (req:Request,res:Response,next:NextFunction){
    try {


        // const {page,limit,skip,orderBy,order} = paginationSortingHelper(req.query)

        const result = await categoryService.getAllCategories();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
    }
}


async function createCategory(req:Request,res:Response,next:NextFunction) {
    try {
        const user = req.user
        const user_id = user?.id
        if(!user){
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await categoryService.createCategory(req.body);
        return res.status(201).json(result);
    } catch (error) {
        console.log(error)
        next(error)
    }
}


async function categoryUpdate(req:Request,res:Response,next:NextFunction) {
    try {
        const user = req.user
        const user_id = user?.id
        if(!user){
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await categoryService.categoryUpdate(req.body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error)
        next(error)
    }
}





export const categoryController = {getAllCategories,createCategory,categoryUpdate}
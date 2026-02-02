import { NextFunction, Request, Response } from "express";
import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { mealsService } from "./meals.service";
import { Role } from "../../constants/role.type";


const removeUndefined = (obj: Record<string, any>) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    });
    return obj;
};

async function getAllMeals(req: Request, res: Response, next: NextFunction) {
    try {
     
        
        const filters = removeUndefined({
            user_id: req.query.user_id as string | undefined,
            searchTerm: req.query.search as string | undefined,
            category_id: req.query.category_id as string | undefined,
            minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
            maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
            isFeatured: req.query.isFeatured ? req.query.isFeatured === 'true' : undefined,
            isSignature: req.query.isSignature ? req.query.isSignature === 'true' : undefined,
            isNew: req.query.isNew ? req.query.isNew === 'true' : undefined,
            isAvailable: req.query.isAvailable ? req.query.isAvailable === 'true' : undefined,
            tags: req.query.tags ? (req.query.tags as string).split(',') : undefined,
        });


        const paginationOptions = paginationSortingHelper(req.query)

        const result = await mealsService.getAllMeals(filters,paginationOptions);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" })
    }
}


async function createMeal(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.user
        const user_id = user?.id
       
        if (!user) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await mealsService.createMeal(req.body, user_id as string);
        return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

async function updateMeal(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.user
        const user_id = user?.id;
        const isAdmin = user?.role === Role.admin
        const { mealId } = req.params;

        if (!user) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await mealsService.updateMeal(req.body, mealId as string)
        return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

async function deleteMeal(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.user
        const { mealId } = req.params;

        if (!user) {
            res.status(404).json({ message: "Unauthorized!" })
        }

        const result = await mealsService.deleteMeal(mealId as string)
        return res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}


async function getSingleMeal(req: Request, res: Response, next: NextFunction) {

    try {
        const { mealId } = req.params;

        const result = await mealsService.getSingleMeal(mealId as string)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        next(error)
    }


}



export const mealsController = { getAllMeals, createMeal, updateMeal, getSingleMeal, deleteMeal }
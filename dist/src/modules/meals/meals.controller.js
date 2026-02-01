import paginationSortingHelper from "../../helper/PaginationSortingHelper";
import { mealsService } from "./meals.service";
import { Role } from "../../constants/role.type";
async function getAllMeals(req, res, next) {
    try {
        const { cuisine } = req.query;
        const cuisineString = typeof cuisine === 'string' ? cuisine : "";
        const user_id = req.query.user_id;
        const category_id = req.query.category_id;
        const dietary = req.query.dietary;
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const { page, limit, skip, orderBy, order } = paginationSortingHelper(req.query);
        const result = await mealsService.getAllMeals({ cuisine: cuisineString, dietary, minPrice, maxPrice, category_id, page, limit, skip, orderBy, order });
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" });
    }
}
async function createMeal(req, res, next) {
    try {
        const user = req.user;
        const user_id = user?.id;
        if (!user) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await mealsService.createMeal(req.body, user_id);
        return res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
}
async function updateMeal(req, res, next) {
    try {
        const user = req.user;
        const user_id = user?.id;
        const isAdmin = user?.role === Role.admin;
        const { mealId } = req.params;
        if (!user) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await mealsService.updateMeal(req.body, mealId);
        return res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
}
async function deleteMeal(req, res, next) {
    try {
        const user = req.user;
        const { mealId } = req.params;
        if (!user) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await mealsService.deleteMeal(mealId);
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
}
async function getSingleMeal(req, res, next) {
    try {
        const { mealId } = req.params;
        const result = await mealsService.getSingleMeal(mealId);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
export const mealsController = { getAllMeals, createMeal, updateMeal, getSingleMeal, deleteMeal };
//# sourceMappingURL=meals.controller.js.map
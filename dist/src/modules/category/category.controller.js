import { categoryService } from "./category.service";
async function getAllCategories(req, res, next) {
    try {
        // const {page,limit,skip,orderBy,order} = paginationSortingHelper(req.query)
        const result = await categoryService.getAllCategories();
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" });
    }
}
async function createCategory(req, res, next) {
    try {
        const user = req.user;
        const user_id = user?.id;
        if (!user) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await categoryService.createCategory(req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
async function categoryUpdate(req, res, next) {
    try {
        const user = req.user;
        const user_id = user?.id;
        if (!user) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await categoryService.categoryUpdate(req.body);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
export const categoryController = { getAllCategories, createCategory, categoryUpdate };
//# sourceMappingURL=category.controller.js.map
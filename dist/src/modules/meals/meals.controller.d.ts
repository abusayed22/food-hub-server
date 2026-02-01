import { NextFunction, Request, Response } from "express";
declare function getAllMeals(req: Request, res: Response, next: NextFunction): Promise<void>;
declare function createMeal(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
declare function updateMeal(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
declare function deleteMeal(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
declare function getSingleMeal(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare const mealsController: {
    getAllMeals: typeof getAllMeals;
    createMeal: typeof createMeal;
    updateMeal: typeof updateMeal;
    getSingleMeal: typeof getSingleMeal;
    deleteMeal: typeof deleteMeal;
};
export {};
//# sourceMappingURL=meals.controller.d.ts.map
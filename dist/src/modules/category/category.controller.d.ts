import { NextFunction, Request, Response } from "express";
declare function getAllCategories(req: Request, res: Response, next: NextFunction): Promise<void>;
declare function createCategory(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
declare function categoryUpdate(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare const categoryController: {
    getAllCategories: typeof getAllCategories;
    createCategory: typeof createCategory;
    categoryUpdate: typeof categoryUpdate;
};
export {};
//# sourceMappingURL=category.controller.d.ts.map
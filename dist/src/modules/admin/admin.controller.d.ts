import { Request, Response } from "express";
declare function getAllUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare const adminController: {
    getAllUsers: typeof getAllUsers;
};
export {};
//# sourceMappingURL=admin.controller.d.ts.map
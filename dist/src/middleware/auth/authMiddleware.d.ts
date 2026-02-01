import { Role } from "../../constants/role.type";
import { NextFunction, Request, Response } from "express";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: Role | string;
                emailVerification: boolean;
            };
        }
    }
}
declare const authMiddleware: (...roles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default authMiddleware;
//# sourceMappingURL=authMiddleware.d.ts.map
import { Role } from "../../constants/role.type";
import { NextFunction, Request, Response } from "express";
import { auth as betterAuth } from "../../../lib/auth";



declare global {
    namespace Express{
        interface Request{
            user?: {
                id:string,
                email:string,
                role:Role | string,
                emailVerification: boolean,

            }
        }
    }
};




const authMiddleware = (...roles:Role[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const session = await betterAuth.api.getSession({
                headers: req.headers as any
            });

            
            if(!session){
                return res.status(401).send("Unauthorized")
            }

            if(!session.user.emailVerified ){
                return res.status(403).send("Please verify your email!")
            }

            req.user = {
                id:session.user.id,
                email:session.user.email,
                role:session.user.role as string,
                emailVerification:session.user.emailVerified
            }

             if(roles.length && !roles.includes(session.user.role as Role)){
                return res.status(403).send("Forbidden!, you don't have access to this resource")
            }

            next()
        } catch (error) {
            console.log(error instanceof Error ? error.message: "")
        }
    }
}


export default authMiddleware;


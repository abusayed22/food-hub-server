import { Router } from "express";
import { Role } from "../../constants/role.type";
import authMiddleware from "../../middleware/auth/authMiddleware";
const route = Router();
route.get("/users", authMiddleware(Role.admin));
export const adminRoute = route;
//# sourceMappingURL=admin.route.js.map
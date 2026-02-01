import { auth as betterAuth } from "../../../lib/auth";
;
const authMiddleware = (...roles) => {
    return async (req, res, next) => {
        try {
            const session = await betterAuth.api.getSession({
                headers: req.headers
            });
            if (!session) {
                return res.status(401).send("Unauthorized");
            }
            if (!session.user.emailVerified) {
                return res.status(403).send("Please verify your email!");
            }
            req.user = {
                id: session.user.id,
                email: session.user.email,
                role: session.user.role,
                emailVerification: session.user.emailVerified
            };
            if (roles.length && !roles.includes(session.user.role)) {
                return res.status(403).send("Forbidden!, you don't have access to this resource");
            }
            next();
        }
        catch (error) {
            console.log(error instanceof Error ? error.message : "");
        }
    };
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map
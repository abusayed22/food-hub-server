import { prisma } from "../../../lib/prisma";
const getAllUsers = async (user_id) => {
    const users = await prisma.user.findMany({
        where: {
            NOT: {
                id: user_id
            }
        }
    });
};
export const adminService = {
    getAllUsers,
};
//# sourceMappingURL=admin.service.js.map
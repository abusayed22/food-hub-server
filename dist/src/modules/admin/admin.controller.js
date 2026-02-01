import { adminService } from "./admin.service";
async function getAllUsers(req, res) {
    try {
        const user_id = req.user?.id;
        const result = await adminService.getAllUsers(user_id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to fetch users"
        });
    }
}
export const adminController = {
    getAllUsers
};
//# sourceMappingURL=admin.controller.js.map
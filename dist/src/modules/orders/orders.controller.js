import { orederServices } from "./orders.service";
export const createOrder = async (req, res) => {
    try {
        const user_id = req.user?.id;
        const data = req.body;
        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await orederServices.createOrder({ ...data, user_id: user_id });
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
};
export const getAllOrders = async (req, res) => {
    try {
        const user_id = req.user?.id;
        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await orederServices.getAllOrders(user_id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
};
export const getSingleOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const user_id = req.user?.id;
        if (!user_id) {
            res.status(404).json({ message: "Unauthorized!" });
        }
        const result = await orederServices.getSingleOrder(orderId, user_id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Failed to place order",
        });
    }
};
export const ordersController = { createOrder, getAllOrders, getSingleOrder };
//# sourceMappingURL=orders.controller.js.map
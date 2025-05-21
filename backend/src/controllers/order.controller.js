import { Order } from "../models/order.model.js";

const createAOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
};

export { createAOrder };

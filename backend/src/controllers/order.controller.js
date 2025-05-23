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

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    if (!orders)
      return res
        .status(200)
        .json({ success: true, message: "No orders found" });

    res.status(200).json(orders);
  } catch (error) {
    console.log("error while fetching orders", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch orders" });
  }
};

export { createAOrder, getOrderByEmail };

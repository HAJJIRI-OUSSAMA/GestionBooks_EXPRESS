
import OrderModel from "../models/Order.js"

export async function getAllOrders() {
    return await OrderModel.find();
}

export async function addOrder(order) {
    return await OrderModel.create(order);
}


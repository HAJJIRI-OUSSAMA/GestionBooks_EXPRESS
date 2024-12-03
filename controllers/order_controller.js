import { getAllOrders, addOrder } from "../services/order_service.js"

export async function AllOrders(req, res) {
    const orders = await getAllOrders()
    res.json(orders);
}

export async function ajouterOrder(req, res) {
    const order = await addOrder(req.body);
    res.json(order);
}


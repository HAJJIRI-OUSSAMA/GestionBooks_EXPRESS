import express from "express";

const router = express.Router();
import { AllOrders, ajouterOrder } from '../controllers/order_controller.js'

router.route("/").get(AllOrders)
    .post(ajouterOrder);

export default router;
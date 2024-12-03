import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    totalAmount: {
        type: Number,
    },
    costumer: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer'
    },
    books: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }]
});

const OrderModel = mongoose.model('Order', orderSchema);
export default OrderModel;
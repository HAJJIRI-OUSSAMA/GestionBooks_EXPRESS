import mongoose from 'mongoose'

const custumerSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Order'
        }
    ]

});

const CustumerModel = mongoose.model('Customer', custumerSchema);

export default CustumerModel;
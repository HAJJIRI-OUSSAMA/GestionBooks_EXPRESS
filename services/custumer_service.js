import CustumerModel from "../models/Costumer.js";

import bcrypt from "bcrypt"

export async function addUser(user) {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    return await CustumerModel.create(user);
}

export async function login(user) {
    const custumer = await CustumerModel.findOne({ "email": user.email });
    if (custumer) {
        const result = await bcrypt.compare(user.password, custumer.password)
        if (result) {
            return true;
        }
    }
    return false;

}


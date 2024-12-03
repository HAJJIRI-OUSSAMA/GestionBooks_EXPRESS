import { addUser, login } from "../services/custumer_service.js"

export async function addCustumer(req, res) {
    const user = await addUser(req.body);
    res.json(user);
}

export async function signIn(req, res) {
    const result = await custumerService.login(req.body);

    if (result) {
        res.json(result);
    } else {
        res.json("noooo")
    }

}



import express from "express";
import { User } from "../models/userModel.js";
const router = express.Router();

////// POST: create user ///////
router.post("/login", async (request, response) => {
    response.json({msg: "login"})
})

router.post("/signup", async (request, response) => {

    const email = request.body.email
    const password = request.body.password

    try {
        const user = await User.signup(email, password)

        response.status(200).json({email, user})
    } catch (error) {
        response.status(400).json({error: error.message})
    }
    

})

export default router;
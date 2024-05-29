import express from "express";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();
////// GET: get all users ///////
router.get("/", async (request, response) => {
    try {
      const users = await User.find({});
  
      return response.status(200).json({
        count: users.length,
        data: users,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

////// POST: create user ///////
router.post("/login", async (request, response) => {
    const email = request.body.email
    const password = request.body.password

    try {
        const user = await User.login(email, password)

        const token = createToken(user._id)
        
        const id = user._id

        response.status(200).json({email, token, id})
    } catch (error) {
        response.status(400).json({error: error.message})
    }

})

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
  }
  

router.post("/signup", async (request, response) => {

    const email = request.body.email
    const password = request.body.password

    try {
        const user = await User.signup(email, password)

        const token = createToken(user._id)

        const id = user._id

        response.status(200).json({email, token, id})
    } catch (error) {
        response.status(400).json({error: error.message})
    }
    

})

export default router;
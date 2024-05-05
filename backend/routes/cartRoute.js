import express from "express";
import { Cart } from "../models/cartModel.js";
const router = express.Router();

////// POST: create cart ///////
router.post("/", async (request, response) => {
  try {
    if (!request.body.userId || !request.body.cart) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }

    const newCart = {
      userId: request.body.userId,
      cart: request.body.cart,
    };

    const cart = await Cart.create(newCart);

    return response.status(201).send(cart);
  } catch {
    (error) => {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    };
  }
});

////// GET: get cart by userid ///////
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const cart = await Cart.find({userId: id}).limit(1);

    return response.status(200).json({ cart });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// PUT: update cart ///////
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.userId || !request.body.cart) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const { id } = request.params;

    const result = await Cart.findOneAndUpdate(
        { userId: id }, 
        request.body, 
        { new: true } 
      );

    if (!result) {
      return response.status(404).json({ message: "Cart not found" });
    }

    return response
      .status(200)
      .json({ message: "Cart updated successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// DELETE: delete cart ///////
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Cart.findOneAndDelete({ userId: id });

    if (!result) {
      return response.status(404).json({ message: "Cart not found" });
    }

    return response
      .status(200)
      .json({ message: "Cart deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

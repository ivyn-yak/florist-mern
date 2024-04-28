import express from "express";
import { Flower } from "../models/flowerModel.js";
const router = express.Router();

////// POST: create flower ///////
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.species ||
      !request.body.season ||
      !request.body.origin ||
      !request.body.price
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }

    const newFlower = {
      species: request.body.species,
      season: request.body.season,
      origin: request.body.origin,
      price: request.body.price,
    };

    const flower = await Flower.create(newFlower);

    return response.status(201).send(flower);
  } catch {
    (error) => {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    };
  }
});

////// GET: get all flowers ///////
router.get("/", async (request, response) => {
  try {
    const flowers = await Flower.find({});

    console.log(flowers[0]._id);
    return response.status(200).json({
      count: flowers.length,
      data: flowers,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// GET: get flower by id ///////
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const flower = await Flower.findById(id);

    return response.status(200).json({ flower });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// PUT: update flower ///////
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.species ||
      !request.body.season ||
      !request.body.origin ||
      !request.body.price
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const { id } = request.params;

    const result = await Flower.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Flower not found" });
    }

    return response
      .status(200)
      .json({ message: "Flower updated successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// DELETE: delete flower ///////
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Flower.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Flower not found" });
    }

    return response
      .status(200)
      .json({ message: "Flower deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

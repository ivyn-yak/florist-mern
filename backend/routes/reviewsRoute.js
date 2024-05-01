import express from "express";
import { Review } from "../models/reviewModel.js";
const router = express.Router();

////// POST: create review ///////
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.rating ||
      !request.body.description ||    
      !request.body.imgURL
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }

    const newReview = {
      name: request.body.name,
      rating: request.body.rating,
      description: request.body.description,
      imgURL: request.body.imgURL
    };

    const review = await Review.create(newReview);

    return response.status(201).send(review);
  } catch {
    (error) => {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    };
  }
});

////// GET: get all reviews ///////
router.get("/", async (request, response) => {
  try {
    const reviews = await Review.find({});

    return response.status(200).json({
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// GET: get review by id ///////
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const review = await Review.findById(id);

    return response.status(200).json({ review });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// PUT: update review ///////
router.put("/:id", async (request, response) => {
  try {
    if (
        !request.body.name ||
        !request.body.rating ||
        !request.body.description ||    
        !request.body.imgURL
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const { id } = request.params;

    const result = await Review.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Review not found" });
    }

    return response
      .status(200)
      .json({ message: "Review updated successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

////// DELETE: delete review ///////
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Review.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Review not found" });
    }

    return response
      .status(200)
      .json({ message: "Review deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

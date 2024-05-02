import mongoose from "mongoose";

const flowerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    flowers: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    occasion: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Flower = mongoose.model("Flower", flowerSchema);

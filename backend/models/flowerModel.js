import mongoose from "mongoose";

const flowerSchema = mongoose.Schema(
  {
    species: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Flower = mongoose.model("Flower", flowerSchema);

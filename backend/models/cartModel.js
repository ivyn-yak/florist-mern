import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    //   ref: "User",
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model("Cart", cartSchema);

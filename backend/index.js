import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import flowersRoute from "./routes/flowersRoute.js"
import reviewsRoute from "./routes/reviewsRoute.js"
import cors from "cors"

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))
app.use(express.json());

app.use("/flowers", flowersRoute)
app.use("/reviews", reviewsRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

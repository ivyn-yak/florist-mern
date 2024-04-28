import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Flower } from "./models/flowerModel.js";
import flowersRoute from "./routes/flowersRoute.js"
import cors from "cors"

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("hello");
});

app.use("/flowers", flowersRoute)

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

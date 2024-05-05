import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors"
import { flowersRoute, reviewsRoute, cartRoute } from "./routes/index.js";

const app = express();

app.use(cors())
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }))
app.use(express.json());

app.use("/flowers", flowersRoute)
app.use("/reviews", reviewsRoute)
app.use("/cart", cartRoute)


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

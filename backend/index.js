import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import { flowersRoute, reviewsRoute, cartRoute, userRoute } from "./routes/index.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());


app.use("/flowers", flowersRoute)
app.use("/reviews", reviewsRoute)
app.use("/cart", cartRoute)
app.use("/user", userRoute)


mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

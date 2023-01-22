import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/auth.js";
import roomsRoute from "./Routes/auth.js";
import hotelRoute from "./Routes/auth.js";
const app = express();
dotenv.config();
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

//middlewares

app.use("/api/auth", authRoute);
app.use("/api/users", authRoute);

app.use("/api/rooms", authRoute);

app.use("/api/hotel", authRoute);

app.listen(8800, () => {
  connect();
  console.log("backend connected.");
});

import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();
app.get("/", (req, res) => {
  res.status(200).json("Hii from backend");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log(`Server is running on port ${ENV.PORT}`)
    );
  } catch (error) {
    console.error("Error in starting serevr ...", error);
  }
};
startServer();

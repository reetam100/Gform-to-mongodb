import express from "express";
import formRoutes from "./routes/form.routes.js";
import config from "./config/config.js";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();
app.use("/api", formRoutes);

app.listen(config.port, () => {
  console.log("Server is running on port: ", config.port);
});

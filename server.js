import express from "express";
import dotenv from "dotenv";
import { profileEnd } from "node:console";
import authRoutes from "./src/Endpoints/routes/Auth/Auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`My server is running at https://localhost:${port}`);
});

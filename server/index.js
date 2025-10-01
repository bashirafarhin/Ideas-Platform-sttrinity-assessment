import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./utils/errorHandler.js";
import ideasRoutes from "./routes/ideas.route.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/ideas", ideasRoutes);

app.use(errorHandler);

app.get("/", (_req, res) => {
  res.send("Server is running");
});

export default app;
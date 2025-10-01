import { Router } from "express";
import { getIdeas, createIdea, upvote } from "../controllers/ideas.controller.js";

const router = Router();

// GET /api/ideas?page=1&pageSize=10
router.get("/", getIdeas);

// POST /api/ideas
router.post("/", createIdea);

// POST /api/ideas/:id/upvote
router.post("/:id/upvote", upvote);

export default router;

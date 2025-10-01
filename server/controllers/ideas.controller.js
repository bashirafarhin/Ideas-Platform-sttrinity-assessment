import * as ideasService from "../services/ideas.service.js";

// Fetch all ideas
export async function getIdeas(req, res, next) {
  try {
    const { pageNumber = 1, pageSize = 10 } = req.query;
    const { items, totalPages } = await ideasService.getAllIdeas(Number(pageNumber), Number(pageSize));
    res.json({
      success: true,
      data: {
        items,
        totalPages,
        pageNumber: Number(pageNumber),
        pageSize: Number(pageSize),
      }
    })
  } catch (err) {
    next(err);
  }
}

// Add a new idea
export async function createIdea(req, res, next) {
  try {
    const { text } = req.body;
    if (!text || text.length > 300) {
      return res.status(400).json({ success: false, message: "Idea text is required and must be under 300 chars" });
    }
    const idea = await ideasService.addIdea(text);
    res.status(201).json({ success: true, data: idea });
  } catch (err) {
    next(err);
  }
}

// Upvote an idea
export async function upvote(req, res, next) {
  try {
    const { id } = req.params;
    const idea = await ideasService.upvoteIdea(id);
    if (!idea) {
      return res.status(404).json({ success: false, message: "Idea not found" });
    }
    res.json({ success: true, data: idea });
  } catch (err) {
    next(err);
  }
}

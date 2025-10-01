import pool from "../db/db.js";

export async function getIdeasCount() {
  const result = await pool.query("SELECT COUNT(*) FROM ideas");
  return Number(result.rows[0].count);
}

// Fetch all ideas with pagination
export async function getAllIdeas(pageNumber = 1, pageSize = 10) {
  const offset = (pageNumber - 1) * pageSize;
  const result = await pool.query(
    "SELECT * FROM ideas ORDER BY created_at DESC LIMIT $1 OFFSET $2",
    [pageSize, offset]
  );
    const totalIdeas = await getIdeasCount(); // total number of ideas in DB
    const totalPages = Math.ceil(totalIdeas / pageSize);
  return { items: result.rows, totalPages };
}

// Add a new idea
export async function addIdea(text) {
  const result = await pool.query(
    "INSERT INTO ideas (text) VALUES ($1) RETURNING *",
    [text]
  );
  return result.rows[0];
}

// Upvote an idea
export async function upvoteIdea(id) {
  const result = await pool.query(
    "UPDATE ideas SET upvotes = upvotes + 1 WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}

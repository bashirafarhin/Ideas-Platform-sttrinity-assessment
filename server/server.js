import app from "./index.js";
const PORT = process.env.PORT || 5000;
import pool from "./db/db.js";


async function startServer() {
  try {
    // Test DB connection
    const client = await pool.connect();
    console.log("✅ Connected to PostgreSQL (Neon)");

    // Release client back to pool
    client.release();

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to PostgreSQL:", err.message);
    process.exit(1); // stop process if DB connection fails
  }
}

startServer();
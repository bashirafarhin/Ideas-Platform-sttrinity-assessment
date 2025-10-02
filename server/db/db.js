// import pkg from "pg";
// const { Pool } = pkg;
// import dotenv from "dotenv";
// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL, // keep this in your .env
//   ssl: {
//     rejectUnauthorized: false, // required for Neon
//   },
// });

// export default pool;
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes("neon") ? { rejectUnauthorized: false } : false,
});

export default pool;

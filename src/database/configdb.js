import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
});

const connect = async () => {
    try {
        await pool.connect();
        console.log("Connected to the database successfully!");

        // Teste uma consulta simples
        const result = await pool.query("SELECT NOW()");
        console.log("Database time:", result.rows[0]);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

connect();

export default pool;

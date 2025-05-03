import pool from "./configdb.js";

const createUsersTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
    try {
        await pool.query(query);
       // console.log("Users table created successfully!");
    } catch (error) {
        console.error("Error creating Users table:", error);
    }
};

export default createUsersTable;
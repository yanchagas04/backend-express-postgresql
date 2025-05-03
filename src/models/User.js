import pool from "../database/configdb.js";
import bcrypt from "bcrypt";

const User = {
    // Método para criar um novo usuário
    async create({ username, email, password }) {
        try {
            // Hasheia a senha antes de salvar
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const query = `
                INSERT INTO Users (username, email, password)
                VALUES ($1, $2, $3)
                RETURNING *;
            `;
            const values = [username, email, hashedPassword];
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    },

    // Método para buscar um usuário pelo email
    async findByEmail(email) {
        try {
            const query = "SELECT * FROM Users WHERE email = $1";
            const result = await pool.query(query, [email]);
            return result.rows[0];
        } catch (error) {
            console.error("Error finding user by email:", error);
            throw error;
        }
    },

    // Método para buscar todos os usuários (opcional)
    async findAll() {
        try {
            const query = "SELECT * FROM Users";
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error("Error finding all users:", error);
            throw error;
        }
    },
};

export default User;
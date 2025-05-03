import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (username, email, password) => {
    try {
        console.log("Registering user with values:", { username, email, password });

        // Verifica se o email já está em uso
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            throw new Error("Email já está em uso.");
        }

        // Cria o novo usuário
        const user = await User.create({ username, email, password });

        // Gera um token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return { user, token };
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        // Busca o usuário pelo email
        const user = await User.findByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Senha inválida.");
        }

        // Gera um token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return { user, token };
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};
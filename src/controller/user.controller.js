import { registerUser, loginUser } from "../service/user.service.js";

export const registerUserController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await registerUser( username, email, password);
        res.status(201).json({ message: "Usuário registrado com sucesso!", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, token } = await loginUser(email, password);
        res.status(200).json({ message: "Login bem-sucedido!", token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
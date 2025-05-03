import express from "express";
import { body, validationResult } from "express-validator";
import { registerUser, loginUser } from "../service/user.service.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("username").notEmpty().withMessage("O nome de usuário é obrigatório."),
        body("email").isEmail().withMessage("O email deve ser válido."),
        body("password")
            .isLength({ min: 6 })
            .withMessage("A senha deve ter pelo menos 6 caracteres."),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;
        try {
            const result = await registerUser(username, email, password);
            res.status(201).json({
                message: "Usuário registrado com sucesso!",
                user: result.user,
                token: result.token,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("O email deve ser válido."),
        body("password").notEmpty().withMessage("A senha é obrigatória."),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            const result = await loginUser(email, password);
            res.status(200).json({
                message: "Login bem-sucedido!",
                user: result.user,
                token: result.token,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
);

export default router;
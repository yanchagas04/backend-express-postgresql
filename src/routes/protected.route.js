import express from "express";
import { authenticateToken } from "../middleware/jwt.token.middleware.js";

const router = express.Router();

router.get("/", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Acesso autorizado!" });
});

export default router;
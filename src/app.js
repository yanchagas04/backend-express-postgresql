import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import protectedRoutes from "./routes/protected.route.js";
import createUsersTable from "./database/initDatabase.js";

dotenv.config();

const app = express();

app.use(express.json());

createUsersTable();

app.use("/api", userRoutes);

app.use("/protected", protectedRoutes);

app.get("/", (req, res) => {
    res.send("Bem-vindo a Home Route!");
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.APP_PORT}`);
});
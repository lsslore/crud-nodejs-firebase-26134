// Configuración de variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Importaciones de dependencias y rutas
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import categoriesRouter from "./src/routes/categories.router.js";
import usersRouter from "./src/routes/users.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON a un objeto JavaScript
app.use(express.json());

// Configuración de CORS
app.use(cors());

// Rutas de la API
app.get("/", (req, res) => {
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

// Rutas de la API
app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

// Ruta para verificar el estado del servidor
app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;


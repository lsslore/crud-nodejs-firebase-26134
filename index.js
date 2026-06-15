import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import usersRouter from "./src/routes/users.router.js";

const app = express();

// Middleware para parsear JSON y manejar CORS(permite tomar datos del body de las peticiones)
app.use(express.json());
app.use(cors());

// Ruta raíz para verificar que el servidor está funcionando
app.get("/", (req, res) => {
  res.send(`
    <h1>API de Productos</h1>
    <p>Servidor funcionando correctamente</p>
  `);
});

// Ejemplo de ruta con parámetros de ruta
// app.get("/parametros/:uid/category/:catId", (req, res) => {
//   console.log(req.params);
//   const { catId, uid } = req.params;
//   res.send("Parametros: " + uid + " " + catId);
// });

// Ejemplo de ruta con parámetros de consulta (query params)
// app.get("/query/params", (req, res) => {
//   console.log(req.query);
//   const { limit } = req.query;
//   res.send(`Query params: ${limit}`);
// });

// Rutas para productos y usuarios
app.use("/api/products", productsRouter);
app.use(usersRouter);

// Ruta para verificar que el servidor está activo
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

const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

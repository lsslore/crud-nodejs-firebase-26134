import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import categoriesRouter from "./src/routes/categories.router.js";
import usersRouter from "./src/routes/users.router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // res.send(`
  //   <h1>API de Productos</h1>
  //   <p>Servidor funcionando correctamente</p>
  // `);
  
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

// app.get("/parametros/:uid/category/:catId", (req, res) => {
//   console.log(req.params);
//   const { catId, uid } = req.params;
//   res.send("Parametros: " + uid + " " + catId);
// });

// app.get("/query/params", (req, res) => {
//   console.log(req.query);
//   const { limit } = req.query;
//   res.send(`Query params: ${limit}`);
// });

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use(usersRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

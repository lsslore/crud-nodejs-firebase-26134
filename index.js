// Importar el módulo Express
import express from "express";

// Importar el router de productos
import productsRouter from "./src/routes/products.router.js";

// Importar el router de usuarios
import usersRouter from "./src/routes/users.router.js";


// Crear una instancia de la aplicación Express
const app = express();
const PORT = 3000;

app.use(express.json()); 

// Ruta para la raíz del sitio
app.get("/", (req, res) => {
   res.send(`
     <h1>API de Productos</h1>
     <p>Servidor funcionando correctamente</p>
   `);
});

app.use('/api/products', productsRouter);
app.use(usersRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

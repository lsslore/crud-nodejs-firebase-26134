// Importar el módulo Express
import express from "express";

// Crear una instancia de la aplicación Express
const app = express();

// Datos de ejemplo para los productos
const products = [
  { id: 1, name: "Producto 1", price: 10 },
  { id: 2, name: "Producto 2", price: 20 },
  { id: 3, name: "Producto 3", price: 30 },
];

// Middleware para registrar las solicitudes entrantes
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next()
});

// Ruta para la raíz del sitio
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// Ruta para obtener todos los productos
app.get("/products", (req, res) => {
  res.send(products);
});

// Ruta para obtener un producto por su ID
app.get("/products/:id", (req, res) => { 
  res.send(`Producto ${req.params.id}`);  
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.send("Not Found");
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => console.log("http://localhost:3000"));

import { Router } from "express";

const router = Router();

import { 
  getProducts, 
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// Ruta para obtener todos los productos
router.get("/", getProducts);

// Ruta para obtener un producto por su ID
router.get("/:id", getProductById);

// Ruta para crear un nuevo producto
router.post("/", createProduct);

// Ruta para eliminar un producto por su ID
router.delete("/:id", deleteProduct);  

// Exportamos el router para usarlo en el archivo principal de la aplicación
export default router;

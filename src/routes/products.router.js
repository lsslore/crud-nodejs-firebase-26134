//importa el router de express
import { Router } from "express";

const router = Router();

//importa los controladores de productos
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

//importa el middleware de autenticación
import { auth } from "../middlewares/auth.middleware.js";

// Prefijo: /api/products
//ruta para crear un producto
router.post("/", auth, createProduct);

//ruta para obtener todos los productos y un producto por id
router.get("/", getProducts);

//ruta para obtener un producto por id
router.get("/:id", getProductById);
// router.get("/:sku", getProductBySKU);

//ruta para actualizar un producto por id
router.put("/:id", auth, updateProduct);

//ruta para eliminar un producto por id
router.delete("/:id", auth, deleteProduct);

export default router;

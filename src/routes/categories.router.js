// Importa el enrutador de Express
import { Router } from "express";

const router = Router();

// Importa los controladores de categorías
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

// prefijo: /api/categories

// CRUD - Create, Read, Update, Delete

// crea una nueva categoría 
router.post("/", createCategory);

// obtiene todas las categorías
router.get("/", getCategories);

// obtiene una categoría por ID
router.get("/:id", getCategoryById);

// actualiza una categoría por ID
// update: patch, put
router.put("/:id", updateCategory);

//
router.delete("/:id", deleteCategory);

export default router;

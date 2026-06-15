import { Router } from "express";
const router = Router();

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

// prefijo: /api/categories

// CRUD - Create, Read, Update, Delete

router.post("/", createCategory);

router.get("/", getCategories);
router.get("/:id", getCategoryById);

// update: patch, put
router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export default router;

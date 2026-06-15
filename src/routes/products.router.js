import { Router } from "express";

const router = Router();

import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// Prefijo: /api/products

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;

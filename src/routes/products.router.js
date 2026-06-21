import { Router } from "express";

const router = Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// Prefijo: /api/products

router.post("/", createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);
// router.get("/:sku", getProductBySKU);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;

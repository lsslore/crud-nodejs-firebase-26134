import { Router } from "express";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Pedro" },
  ]);
});

export default router;

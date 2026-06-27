//Importa el módulo Router de Express para crear rutas en la aplicación
import { Router } from "express";

// Crea una instancia del enrutador de Express
const router = Router();

// Define una ruta GET para "/users" que devuelve una lista de usuarios en formato JSON
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Pedro" },
  ]);
});

export default router;

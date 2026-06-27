//Importamos el módulo Router desde express
import { Router } from "express";

//importamos el controlador "login" desde el archivo auth.controller.js
import { login } from "../controllers/auth.controller.js";

//Creamos una instancia del enrutador
const router = Router();

// prefijo: /api/auth
//ejecuta el controlador "login", ruta para iniciar sesión
router.post("/login", login);

export default router;

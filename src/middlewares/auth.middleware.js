// Importa dotenv para usar variables de entorno y carga el archivo .env
import dotenv from "dotenv";
dotenv.config();

// Importa la librería jsonwebtoken para crear y verificar tokens JWT
import jwt from "jsonwebtoken";

// Middleware de autenticación: verifica el token JWT y permite continuar si es válido
export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Formato de token invalido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Token invalido o expirado" });
  }
};

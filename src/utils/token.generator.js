import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

//exporta la función generateToken que genera un token JWT para un usuario dado
export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
  };
  
  // firma el token con el secreto y la configuración de expiración
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

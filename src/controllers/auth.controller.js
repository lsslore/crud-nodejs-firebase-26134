// Importa la función generateToken para crear un JWT
import { generateToken } from "../utils/token.generator.js";

// Usuario por defecto (ejemplo) con datos de prueba
const default_user = {
  id: 1,
  name: "User",
  email: "user@email.com",
  password: "strongPass123",
  admin: true,
};

// Controlador POST /login: valida credenciales y devuelve un token JWT
export const login = (req, res) => {
  const { email, password } = req.body;

    // Verifica que se envíen credenciales
  if (!email || !password) {
    return res.status(400).json({
      message: "Faltan credenciales",
    });
  }
   
    // Verifica que las credenciales coincidan con el usuario por defecto
  if (email !== default_user.email || password !== default_user.password) {
    return res.status(401).json({
      message: "Credenciales inválidas",
    });
  }
  
    // Genera el token JWT usando los datos del usuario
  const token = generateToken(default_user);

    // Responde con mensaje de éxito y el token
  res.json({
    message: "Login exitoso",
    token,
  });
};

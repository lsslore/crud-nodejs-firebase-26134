//importamos dotenv para poder usar variables de entorno en .env para no exponer información sensible en el código
import dotenv from "dotenv";
dotenv.config();

//importamos el archivo app.js que contiene la configuración de nuestro servidor
import app from "./app.js";

// Usa el puerto definido en .env, o 3000 si no existe
const PORT = process.env.PORT || 3001;

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

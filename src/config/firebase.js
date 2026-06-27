// Importa dotenv y carga las variables de entorno desde el archivo .env
import dotenv from "dotenv";
dotenv.config();  

// Importa la función para inicializar la app de Firebase
import { initializeApp } from "firebase/app";

// Importa la función para trabajar con Firestore (base de datos)
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID 
}; 

// Inicializa la aplicación de Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore para interactuar con la base de datos
const db = getFirestore(app);

// Exporta la instancia de Firestore para usarla en el proyecto
export default db;

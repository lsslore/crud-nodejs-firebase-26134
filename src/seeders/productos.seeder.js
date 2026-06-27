// Seeder de productos para Firebase Firestore
import db from "../config/firebase.js";

// Importamos las funciones necesarias de Firebase Firestore
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const productsSeeders = [
  {
    title: "Mouse Inalambrico Logitech M185",
    description: "Mouse compacto, comodo y de larga duracion de bateria.",
    price: 12.99,
    stock: 40,
  },
  {
    title: "Teclado Mecanico Redragon Kumara",
    description: "Teclado mecanico tenkeyless con retroiluminacion roja.",
    price: 39.9,
    stock: 18,
  },
  {
    title: "Monitor Samsung 24 Pulgadas FHD",
    description: "Pantalla IPS Full HD ideal para trabajo y estudio diario.",
    price: 149.99,
    stock: 12,
  },
  {
    title: "Audifonos Bluetooth JBL Tune 510BT",
    description: "Audifonos inalambricos con buen sonido y bateria duradera.",
    price: 55,
    stock: 25,
  },
  {
    title: "Disco SSD Kingston 480GB",
    description: "Unidad SSD para acelerar arranque y carga de aplicaciones.",
    price: 34.5,
    stock: 30,
  },
  {
    title: "Camara Web Logitech C270",
    description: "Camara web HD con microfono integrado para videollamadas.",   
    price: 29.99, 
    stock: 15,
  },
  {
    title: "Parlante Bluetooth Anker Soundcore",
    description: "Parlante portatil con sonido potente y bateria de larga duracion.",
    price: 49.99,
    stock: 20,
  },
  {
    title: "Memoria RAM Corsair Vengeance 16GB",
    description: "Kit de memoria RAM DDR4 para mejorar el rendimiento del sistema.",  
    price: 79.99,
    stock: 10,
  },
  {
    title: "Fuente de Poder EVGA 600W",
    description: "Fuente de poder eficiente y confiable para tu PC.",
    price: 59.99,
    stock: 8,
  },
  {
    title: "Tarjeta Grafica NVIDIA GeForce GTX 1660",
    description: "Tarjeta grafica potente para juegos y aplicaciones de diseño.",
    price: 229.99,
    stock: 5,
  },
];

// Función para crear los productos en la colección de Firestore
const createProducts = () => {
  productsSeeders.forEach(async (product) => {
    await addDoc(productsCollection, product);
  });
};

createProducts();

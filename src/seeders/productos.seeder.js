import db from "../config/firebase.js";

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
];

const createProducts = () => {
  productsSeeders.forEach(async (product) => {
    await addDoc(productsCollection, product);
  });
}; 

createProducts();

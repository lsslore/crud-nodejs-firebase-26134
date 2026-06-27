//Importamos la configuración de Firebase
import db from "../config/firebase.js";

// Importamos las funciones necesarias de Firebase Firestore
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// Creamos una referencia a la colección "products" en Firestore
const productsCollection = collection(db, "products");

// CRUD - Create, Read, Update, Delete

// Función para crear un nuevo producto en la colección "products"
export const createProduct = async (product) => {
  const productRef = await addDoc(productsCollection, product);

  return {
    id: productRef.id,
    ...product,
  };
};

// Crea un nuevo producto en Firestore y devuelve su id junto con los datos
export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);

  const products = [];

  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};

// Obtiene un producto por su id desde Firestore
export const getProductById = async (id) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

// Actualiza un producto existente en Firestore por su id
export const updateProduct = async (id, product) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
    // throw new Error('El producto no existe')
  }

  await updateDoc(productRef, product);

  return {
    id: productRef.id,
    ...product,
  };
};

// Elimina un producto de Firestore por su id y devuelve el objeto borrado
export const deleteProduct = async (id) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  const deletedProduct = {
    id: snapshot.id,
    ...snapshot.data(),
  };

  await deleteDoc(productRef);

  return deletedProduct;
};

import db from "../config/firebase.js";

import { collection, getDocs } from "firebase/firestore";

const productsCollection = collection(db, "products");

// CRUD - Create, Read, Update, Delete

export const fetchProducts = async () => {
  const snapshot = await getDocs(productsCollection);

  const products = [];

  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};

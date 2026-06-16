const products = [
  { id: 1, name: "Mouse", price: 12000 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 150000 },
];

import { fetchProducts } from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await fetchProducts();
  res.json(products); 
};

export const getProductById = (req, res) => {
  const id = Number(req.params.id);
  // const { id } = req.params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
};

export const createProduct = (req, res) => {
  const { name, price, categoryID } = req.body;

  if (!name || !price || !categoryID) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  if (categoryID != 1) {
    return res.status(404).json({
      message: "Categoría no válida",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category: 1, // Solo es un ejemplo, todas las categorías son 1
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.json({
    message: "Producto eliminado",
    product: deletedProduct[0],
  });
};

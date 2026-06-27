// Datos de ejemplo (serán reemplazados por la base de datos)
/*
const products = [
  { id: 1, name: "Mouse", price: 12000 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 150000 },
];
*/

// Función para obtener todos los productos
import {
  createProduct as createProductModel,
  getProducts as getProductsModel,
  getProductById as getProductByIdModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "../models/Product.js";

// Controlador GET: obtiene todos los productos y los devuelve en formato JSON
export const getProducts = async (req, res) => {
  const products = await getProductsModel();
  res.json(products);
};


// Controlador GET: obtiene un producto por su id y lo devuelve en formato JSON
export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await getProductByIdModel(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
};

// Función para crear un nuevo producto
export const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newProduct = await createProductModel({
    name,
    price,
    stock,
  });

  res.status(201).json(newProduct);
};

// Función para actualizar un producto existente
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const updatedProduct = await updateProductModel(id, {
    name,
    price,
    stock,
  });

  if (!updatedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(updatedProduct);
};

// Función para eliminar un producto existente
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await deleteProductModel(id);

  if (!deletedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json({
    message: "Producto eliminado",
    product: deletedProduct,
  });
};

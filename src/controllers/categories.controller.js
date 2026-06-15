export const createCategory = (req, res) => {
  const { title } = req.body;

  res.status(201).json({ message: `Categoria creada ${title}` });
};

export const getCategories = (req, res) => {
  res.json({
    message: "Listado de categorías",
  });
};

export const getCategoryById = (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Categoría con ID ${id}`,
  });
};

export const updateCategory = (req, res) => {
  const { id } = req.params;

  if (id != 1) {
    // Solo es un ejemplo, solo vendo con una sola categoría, el ID es 1
    return res.status(404).json({ error: "Categoría no encontrada" });
  }

  const { title } = req.body;

  if (!title) {
    return res.status(422).json({ error: "El title es requerido" });
  }

  res.json({ message: `Se actualizo el ${title} del ID ${id}` });
};

// createdAt, udpatedAt, deletedAt = null -> fecha de eliminación lógica
export const deleteCategory = (req, res) => {
  const { id } = req.params;

  if (id != 1) {
    return res.status(404).json({ error: "Categoría no encontrada" });
  }

  res.json({ message: `Category ID ${id} borrada` });
};

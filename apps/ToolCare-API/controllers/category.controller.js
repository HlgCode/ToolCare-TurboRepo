const { Category } = require("../database/models");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las categorías" });
  }
};

exports.getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByPk(id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

exports.updateCategory = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await category.update({ name });
      res.json(category);
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await category.destroy();
      res.json({ message: "Categoría eliminada con éxito" });
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la categoría" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getCategoryTools = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

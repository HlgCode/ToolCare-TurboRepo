const { Tool } = require("../database/models");

exports.getAllTools = async (req, res) => {
  try {
    const tools = await Tool.findAll();
    res.json(tools);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener las herramientas y equipos" });
  }
};

exports.getToolById = async (req, res) => {
  const id = req.params.id;
  try {
    const tool = await Tool.findByPk(id);
    if (tool) {
      res.json(tool);
    } else {
      res.status(404).json({ error: "Herramienta/equipo no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la herramienta/equipo" });
  }
};

exports.createTool = async (req, res) => {
  const {
    code,
    name,
    categoryId,
    locationId,
    maintenanceTimes,
    userId,
    status,
  } = req.body;
  try {
    const newTool = await Tool.create({
      code,
      name,
      categoryId,
      locationId,
      maintenanceTimes,
      userId,
      status,
    });
    res.json(newTool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la herramienta/equipo" });
  }
};

exports.updateTool = async (req, res) => {
  const id = req.params.id;
  const {
    code,
    name,
    categoryId,
    locationId,
    maintenanceTimes,
    userId,
    status,
  } = req.body;
  try {
    const tool = await Tool.findByPk(id);
    if (tool) {
      await tool.update({
        code,
        name,
        categoryId,
        locationId,
        maintenanceTimes,
        userId,
        status,
      });
      res.json(tool);
    } else {
      res.status(404).json({ error: "Herramienta/equipo no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al actualizar la herramienta/equipo" });
  }
};

exports.deleteTool = async (req, res) => {
  const id = req.params.id;
  try {
    const tool = await Tool.findByPk(id);
    if (tool) {
      await tool.destroy();
      res.json({ message: "Herramienta/equipo eliminada con éxito" });
    } else {
      res.status(404).json({ error: "Herramienta/equipo no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la herramienta/equipo" });
  }
};

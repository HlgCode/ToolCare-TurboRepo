const { Issue } = require("../database/models");

exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.findAll();
    res.json(issues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los reportes" });
  }
};

exports.getIssueById = async (req, res) => {
  const id = req.params.id;
  try {
    const issue = await Issue.findByPk(id);
    if (issue) {
      res.json(issue);
    } else {
      res.status(404).json({ error: "Reporte no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el reporte" });
  }
};

exports.createIssue = async (req, res) => {
  const { title, date, toolId, userId, status } = req.body;
  try {
    const issue = await Issue.create({ title, date, toolId, userId, status });
    res.json(issue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el reporte" });
  }
};

exports.updateIssue = async (req, res) => {
  const id = req.params.id;
  const { title, date, toolId, userId, status } = req.body;
  try {
    const issue = await Issue.findByPk(id);
    if (issue) {
      await issue.update({ title, date, toolId, userId, status });
      res.json(issue);
    } else {
      res.status(404).json({ error: "Reporte no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el reporte" });
  }
};

exports.deleteIssue = async (req, res) => {
  const id = req.params.id;
  try {
    const issue = await Issue.findByPk(id);
    if (issue) {
      await issue.destroy();
      res.json({ message: "Reporte eliminado con éxito" });
    } else {
      res.status(404).json({ error: "Reporte no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el reporte" });
  }
};

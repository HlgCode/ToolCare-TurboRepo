const { Session } = require("../database/models");

exports.getAllSessions = async (req, res) => {
  try {
    const session = await Session.findAll();
    res.json(session);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las sesiones" });
  }
};

exports.getSessionById = async (req, res) => {
  const { id } = req.params;
  try {
    const session = await Session.findByPk(id);
    if (session) {
      res.json(session);
    } else {
      res.status(404).json({ error: "Sesión no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la sesión" });
  }
};

exports.createSession = async (req, res) => {
  const { userId } = req.body;
  try {
    const newSession = await Session.create({ userId });
    res.json(newSession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la sesión" });
  }
};

exports.updateSession = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const session = await Session.findByPk(id);
    if (session) {
      await session.update({ userId });
      res.json(session);
    } else {
      res.status(404).json({ error: "Sesión no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la sesión" });
  }
};

exports.deleteSession = async (req, res) => {
  const id = req.params;
  try {
    const session = await Session.findByPk(id);
    if (session) {
      await session.destroy();
      res.json({ message: "Sesión eliminada correctamente" });
    } else {
      res.Status(404).json({ error: "Sesión no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la sesión" });
  }
};

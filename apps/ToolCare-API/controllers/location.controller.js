const { Location } = require("../database/models");

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las ubicaciones" });
  }
};

exports.getLocationById = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByPk(id);
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ error: "Ubicación no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la ubicación" });
  }
};

exports.createLocation = async (req, res) => {
  const { name, adress, contact } = req.body;
  try {
    const newLocation = await Location.create({ name, adress, contact });
    res.json(newLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la ubicación" });
  }
};

exports.updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, adress, contact } = req.body;
  try {
    const location = await Location.findByPk(id);
    if (location) {
      await location.update({ name, adress, contact });
      res.json(location);
    } else {
      res.status(404).json({ error: "Ubicación no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la ubicación" });
  }
};

exports.deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByPk(id);
    if (location) {
      await location.destroy();
      res.json({ message: "Ubicación eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Ubicación no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la ubicación" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getLocationSchedules = async (req, res) => {
  try {
  } catch (error) {}
};*/

/**exports.getLocationMaintenances = async (req, res) => {
  try {
  } catch (error) {}
};*/

/**exports.getLocationUsers = async (req, res) => {
  try {
  } catch (error) {}
};*/

/**exports.getLocationTools = async (req, res) => {
  try {
  } catch (error) {}
};*/

/**exports.getLocationIssues = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

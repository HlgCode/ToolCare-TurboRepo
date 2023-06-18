const { Maintenance } = require("../database/models");

exports.getAllMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.findAll();
    res.json(maintenances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los mantenimientos" });
  }
};

exports.getMaintenanceById = async (req, res) => {
  const { id } = req.params;
  try {
    const maintenance = await Maintenance.findByPk(id);
    if (maintenance) {
      res.json(maintenance);
    } else {
      res.status(404).json({ error: "Mantenimiento no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el mantenimiento" });
  }
};

exports.createMaintenance = async (req, res) => {
  const {
    title,
    scheduleId,
    maintenanceDate,
    toolId,
    maintenanceType,
    frequency,
    requireCalibration,
    supplierEmpoyeeId,
    status,
  } = req.body;
  try {
    const newMaintenance = await Maintenance.create({
      title,
      scheduleId,
      maintenanceDate,
      toolId,
      maintenanceType,
      frequency,
      requireCalibration,
      supplierEmpoyeeId,
      status,
    });
    res.json(newMaintenance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el mantenimiento" });
  }
};

exports.updateMaintenance = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    scheduleId,
    maintenanceDate,
    toolId,
    maintenanceType,
    frequency,
    requireCalibration,
    supplierEmpoyeeId,
    status,
  } = req.body;
  try {
    const maintenance = await Maintenance.findByPk(id);
    if (maintenance) {
      await maintenance.update({
        title,
        scheduleId,
        maintenanceDate,
        toolId,
        maintenanceType,
        frequency,
        requireCalibration,
        supplierEmpoyeeId,
        status,
      });
      res.json(maintenance);
    } else {
      res.status(404).json({ error: "Mantenimiento no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el mantenimiento" });
  }
};

exports.deleteMaintenance = async (req, res) => {
  const { id } = req.params;
  try {
    const maintenance = await Maintenance.findByPk(id);
    if (maintenance) {
      await maintenance.destroy();
      res.json({ message: "Mantenimiento eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Mantenimiento no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el mantenimiento" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getMaintenanceOrder = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

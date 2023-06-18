const { Router } = require("express");

const {
  getAllMaintenances,
  getMaintenanceById,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
} = require("../controllers/maintenance.controller");

const router = Router();

// CRUD Routes

// Obtener todas los mantenimientos
router.get("/maintenances", getAllMaintenances);

// Obtener un mantenimiento por ID
router.get("/maintenances/:id", getMaintenanceById);

// Crear un nuev mantenimiento
router.post("/maintenances", createMaintenance);

// Actualizar un mantenimiento existente
router.put("/maintenances/:id", updateMaintenance);

// Eliminar un mantenimiento existente
router.delete("/maintenances/:id", deleteMaintenance);

//-----------------------------OTRAS RUTAS-----------------------------------

// Obtener la order de compra asociada al mantenimiento
router.get("/maintenances/:id/orders/:id");

module.exports = router;

const { Router } = require("express");

const {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/schedule.controller");

const router = Router();

// CRUD Routes

// Obtener todas las ubicaciones
router.get("/schedules", getAllSchedules);

// Obtener una ubicación por ID
router.get("/schedules/:id", getScheduleById);

// Crear una nueva ubicación
router.post("/schedules", createSchedule);

// Actualizar una ubicación existente
router.put("/schedules/:id", updateSchedule);

// Eliminar una ubicación existente
router.delete("/schedules/:id", deleteSchedule);

//-----------------------------OTRAS RUTAS-----------------------------------

// Obtener todos los maintenances de una schedule
router.get("/schedules/;id/maintenances");

module.exports = router;

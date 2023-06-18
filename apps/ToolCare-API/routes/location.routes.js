const { Router } = require("express");

const {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} = require("../controllers/location.controller");

const router = Router();

// CRUD Routes

// Obtener todas las ubicaciones
router.get("/locations", getAllLocations);

// Obtener una ubicación por ID
router.get("/locations/:id", getLocationById);

// Crear una nueva ubicación
router.post("/locations", createLocation);

// Actualizar una ubicación existente
router.put("/locations/:id", updateLocation);

// Eliminar una ubicación existente
router.delete("/locations/:id", deleteLocation);

//-----------------------------OTRAS RUTAS-----------------------------------

// Obtener todos los schedules de una location
router.get("/locations/:id/schedules");

// Obtener todos los maintenances de una schedule desde location
router.get("/locations/:id/schedules/:id/maintenances");

// Obtener todos los users de una location
router.get("/locations/:id/users");

// Obtener todas las tools de una location
router.get("/locations/:id/tools");

// Obtener todas las issues de una location
router.get("/locations/:id/issues");

module.exports = router;

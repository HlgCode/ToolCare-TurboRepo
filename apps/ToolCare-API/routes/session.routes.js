const { Router } = require("express");

const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
} = require("../controllers/session.controller");

const router = Router();

// CRUD Session

// Obtener todos las sesiones
router.get("/sessions", getAllSessions);

// Obtener una sesión por ID
router.get("/session/:id", getSessionById);

// Crear una nueva sesión
router.post("/session", createSession);

// Actualizar una sesion existente
router.put("/session/:id", updateSession);

// Eliminar una sesion existente
router.delete("/session/:id", deleteSession);

//-----------------------------OTRAS RUTAS-----------------------------------

//

module.exports = router;

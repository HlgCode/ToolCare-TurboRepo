const { Router } = require("express");

const {
  deleteUser,
  updateUser,
  createUser,
  getUserById,
  getAllUsers,
} = require("../controllers/user.controller");

const router = Router();

// CRUD Routes

// Obtener todas los usuarios
router.get("/users", getAllUsers);

// Obtener una usario por su ID
router.get("/users/:id", getUserById);

// Crear un nuevo usuario
router.post("/users", createUser);

// Actualizar un usuario existente
router.put("/users/:id", updateUser);

// Eliminar un usuario existente
router.delete("/users/:id", deleteUser);

//-----------------------------OTRAS RUTAS-----------------------------------

// Obtener todas las Sedes a las que pertenece el usuario
// router.get("/users/:id/locations")

// Obtener todos las sesiones de un usuario
// router.get("/users/:id/sessions");

// Obtener herramientas de usuario
// router.get("/users/:id/tools");

// Obtener todos las issues creadas por un usuario
// router.get("/users/:id/issues");

module.exports = router;

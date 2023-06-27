const { Router } = require("express");
const auth = require("../middlewares/auth");
const {
  login,
  welcome,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = Router();
// -----------------------[Rutas para la Autenticación]--------------------------

router.post("/login", login);
router.get("/dashboard", auth, welcome);

// -----------------------[Rutas para el CRUD]--------------------------

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

// -----------------------[Rutas para las relaciones]--------------------------

// Obtener todas las Sedes a las que pertenece el usuario
// router.get("/users/:id/locations")

// Obtener todos las sesiones de un usuario
// router.get("/users/:id/sessions");

// Obtener herramientas de usuario
// router.get("/users/:id/tools");

// Obtener todos las issues creadas por un usuario
// router.get("/users/:id/issues");

module.exports = router;

const { Router } = require("express");

const {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/role.controller");

const router = Router();

// CRUD Routes

// Obtener todos los roles
router.get("/roles", getAllRoles);

// Obtener un rol por ID
router.get("/roles/:id", getRoleById);

// Crear un nuevo rol
router.post("/roles", createRole);

// Actualizar un rol existente
router.put("/roles/:id", updateRole);

// Eliminar un rol existentre
router.delete("/roles/:id", deleteRole);

//-----------------------------OTRAS RUTAS-----------------------------------

//

module.exports = router;

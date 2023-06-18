const { Router } = require("express");

const {
  getAllOrders,
  getOrderById,
  updateOrder,
  createOrder,
  deleteOrder,
} = require("../controllers/purchaseOrder.controller");

const router = Router();

// CRUD purchaseOrder

// Obtener todas las ordenes
router.get("/Orders", getAllOrders);

// Obtener una orden por ID
router.get("/Orders/:id", getOrderById);

// Crear una nueva orden
router.post("/Orders", createOrder);

// Actualizar una orden existente
router.put("/Orders/:id", updateOrder);

// Eliminar una orden existente
router.delete("/Orders/:id", deleteOrder);

//-----------------------------OTRAS RUTAS-----------------------------------

//

module.exports = router;

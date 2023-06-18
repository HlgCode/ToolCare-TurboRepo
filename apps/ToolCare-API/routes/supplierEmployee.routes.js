const { Router } = require("express");
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/supplierEmployee.controller");

const router = Router();

// Routes
router.get("/supplierEmployees", getAllEmployees);
router.get("/supplierEmployees/:id", getEmployeeById);
router.post("/supplierEmployees", createEmployee);
router.put("/supplierEmployees/:id", updateEmployee);
router.delete("/supplierEmployees/:id", deleteEmployee);

module.exports = router;

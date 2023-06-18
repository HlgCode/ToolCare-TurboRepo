const { Router } = require("express");
const {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/supplierCompany.controller");

const router = Router();

// Routes
router.get("/supplierCompanies", getAllCompanies);
router.get("/supplierCompanies/:id", getCompanyById);
router.post("/supplierCompanies", createCompany);
router.put("/supplierCompanies/:id", updateCompany);
router.delete("/supplierCompanies/:id", deleteCompany);

module.exports = router;

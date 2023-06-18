const { Router } = require("express");
const {
  getAllTools,
  getToolById,
  createTool,
  updateTool,
  deleteTool,
} = require("../controllers/tool.controller");

const router = Router();

// Routes
router.get("/tools", getAllTools);
router.get("/tools/:id", getToolById);
router.post("/tools", createTool);
router.put("/tools/:id", updateTool);
router.delete("/tools/:id", deleteTool);

module.exports = router;

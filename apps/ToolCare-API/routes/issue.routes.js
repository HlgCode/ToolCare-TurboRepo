const { Router } = require("express");
const {
  getAllIssues,
  getIssueById,
  createIssue,
  updateIssue,
  deleteIssue,
} = require("../controllers/issue.controller");

const router = Router();

// Routes
router.get("/issues", getAllIssues);
router.get("/issues/:id", getIssueById);
router.post("/issues", createIssue);
router.put("/issues/:id", updateIssue);
router.delete("/issues/:id", deleteIssue);

module.exports = router;

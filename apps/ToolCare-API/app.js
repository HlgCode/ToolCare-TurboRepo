const { json, urlencoded } = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs").promises;

const createServer = () => {
  const app = express();

  // Middlewares
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/", async (req, res) => {
      try {
        const packageData = await fs.readFile("./package.json", "utf8");
        const parsedData = JSON.parse(packageData);
        res.json(parsedData);
      } catch (error) {
        res.status(500).send("Error al leer el archivo package.json");
      }
    });

  // Import routes
  const locationRoutes = require("./routes/location.routes");
  const scheduleRoutes = require("./routes/schedule.routes");
  const maintenanceRoutes = require("./routes/maintenance.routes");
  const categoryRoutes = require("./routes/category.routes");
  const roleRoutes = require("./routes/role.routes");
  const supplierCompanyRoutes = require("./routes/supplierCompany.routes");
  const supplieremployeeRoutes = require("./routes/supplierEmployee.routes");
  const toolRoutes = require("./routes/tool.routes");
  const issueRoutes = require("./routes/issue.routes");

  const sessionRoutes = require("./routes/session.routes");
  const userRoutes = require("./routes/user.routes");
  const orderRoutes = require("./routes/purchaseOrder.routes");

  // API Routes
  app.use("/api", locationRoutes);
  app.use("/api", scheduleRoutes);
  app.use("/api", maintenanceRoutes);

  app.use("/api", roleRoutes);
  //app.use("/api", userRoutes);
  //app.use("/api", sessionRoutes);
  app.use("/api", issueRoutes);
  app.use("/api", userRoutes);
  app.use("/api", sessionRoutes);
  //app.use("/api", issueRoutes);

  // app.use("/api");

  app.use("/api", categoryRoutes);
  app.use("/api", toolRoutes);

  app.use("/api", orderRoutes);

  app.use("/api", supplierCompanyRoutes);
  app.use("/api", supplieremployeeRoutes);

  return app;
};

exports.createServer = createServer;

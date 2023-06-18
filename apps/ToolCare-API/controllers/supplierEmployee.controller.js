const { supplierEmployee } = require("../database/models");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await supplierEmployee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener los empleados de proveedores" });
  }
};

exports.getEmployeeById = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await supplierEmployee.findByPk(id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: "Empleado de proveedor no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener empleado de proveedor" });
  }
};

exports.createEmployee = async (req, res) => {
  const { idCard, fullname, phone, position, companyId } = req.body;
  try {
    const newEmployee = await supplierEmployee.create({
      idCard,
      fullname,
      phone,
      position,
      companyId,
    });
    res.json(newEmployee);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al crear nuevo empleado de proveedor" });
  }
};

exports.updateEmployee = async (req, res) => {
  const id = req.params.id;
  const { idCard, fullname, phone, position, companyId } = req.body;
  try {
    const employee = await supplierEmployee.findByPk(id);
    if (employee) {
      await employee.update({ idCard, fullname, phone, position, companyId });
      res.json(employee);
    } else {
      res.status(404).json({ error: "Empleado de proveedor no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar los datos del empleado de proveedor",
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await supplierEmployee.findByPk(id);
    if (employee) {
      await employee.destroy();
      res.json({ message: "Empleado de proveedor eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Empleado de proveedor no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al eliminar el empleado de proveedor" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getEmployeeMaintenances = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

const { supplierCompany } = require("../database/models");

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await supplierCompany.findAll();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener las compañías de proveedores" });
  }
};

exports.getCompanyById = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await supplierCompany.findByPk(id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ error: "Compañía de proveedor no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener la compañía de proveedor" });
  }
};

exports.createCompany = async (req, res) => {
  const { NIT, name, email, phone, description } = req.body;
  try {
    const newCompany = await supplierCompany.create({
      NIT,
      name,
      email,
      phone,
      description,
    });
    res.json(newCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la compañía de proveedor" });
  }
};

exports.updateCompany = async (req, res) => {
  const id = req.params.id;
  const { NIT, name, email, phone, description } = req.body;
  try {
    const company = await supplierCompany.findByPk(id);
    if (company) {
      await company.update({ NIT, name, email, phone, description });
      res.json(company);
    } else {
      res.status(404).json({ error: "Compañía de proveedor no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al actualizar la compañía de proveedor" });
  }
};

exports.deleteCompany = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await supplierCompany.findByPk(id);
    if (company) {
      await company.destroy();
      res.json({ message: "Compañia eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Compañía de proveedor no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al eliminar la compañía de proveedor" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getCompanyEmployees = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

/**exports.getCompanyMaintenances = async (req, res) => {
  try {
  } catch (error) {}
};*/

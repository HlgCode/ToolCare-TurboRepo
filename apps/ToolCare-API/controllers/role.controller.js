const { Role } = require("../database/models");

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los roles" });
  }
};

exports.getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (role) {
      res.json(role);
    } else {
      res.status(404).json({ error: "Rol no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el rol" });
  }
};

exports.createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const newRole = await Role.create({ name });
    res.json(newRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el rol" });
  }
};

exports.updateRole = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const role = await Role.findByPk(id);
    if (role) {
      await role.update({ name });
      res.json(role);
    } else {
      res.status(404).json({ error: "Rol no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el rol" });
  }
};

exports.deleteRole = async (req, res) => {
  const id = req.params.id;
  try {
    const role = await Role.findByPk(id);
    if (role) {
      await role.destroy();
      res.json({ message: "Rol eliminado correctamente" });
    } else {
      res.Status(404).json({ error: "Rol no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el rol" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getRoleUsers = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

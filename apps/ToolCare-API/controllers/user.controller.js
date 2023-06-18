const { User } = require("../database/models");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

exports.createUser = async (req, res) => {
  const { idCard, fullName, birthDate, email, username, password, roleId } =
    req.body;
  try {
    const newUser = await User.create({
      idCard,
      fullName,
      birthDate,
      email,
      username,
      password,
      roleId,
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { idCard, fullName, birthDate, email, username, password, roleId } =
    req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update({
        idCard,
        fullName,
        birthDate,
        email,
        username,
        password,
        roleId,
      });
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuario eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/**exports.getUserTools = async (req, res) => {
   try {
   } catch (error) {}
 };*/

/**exports.getUserIssues = async (req, res) => {
  try {
  } catch (error) {}
};*/

/**exports.getUserSessions = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

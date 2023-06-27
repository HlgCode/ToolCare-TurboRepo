/* eslint-disable turbo/no-undeclared-env-vars */
const { User } = require("../database/models");
const { Role } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const key = process.env.JWT_SECRET;

// -----------------------[Funciones para la Autenticación]--------------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const user = await User.findOne({ where: { email } });
    console.log(user);
    if(user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email }, key, {
        expiresIn: "5 minutes"
      });
      
      user.token = token;

      user.save()
      .then(() => console.log("Token guardado")).catch((err) => console.log(err));

      res.status(200).json(user);
    }else {
      res.status(401).json({ error: "Credenciales incorrectas" });
    }

  } catch (error) {
    console.log("Error al iniciar sesión", error);
  }
};

exports.welcome = async (req, res) => {
  try {
   
      res.status(200).json({ message: "Bienvenido a ToolCare" });
    
  } catch (error) {
    console.log("Error al iniciar sesión", error);
  }
};
// -----------------------[Funciones para el CRUD]--------------------------
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Role }],
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findAll({
      where: { idCard: id },
      include: [{ model: Role }],
    });
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
// Aca se deberia almacenar la contraseña encriptada usando bcrypt
exports.createUser = async (req, res) => {
  try {
    if (
      !req.body.idCard ||
      !req.body.fullName ||
      !req.body.birthDate ||
      !req.body.email ||
      !req.body.username ||
      !req.body.password ||
      !req.body.roleId
    ) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }
    const { idCard, fullName, birthDate, email, username, password, roleId } =
      req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const encriptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      idCard,
      fullName,
      birthDate,
      email,
      username,
      password: encriptedPassword,
      roleId,
    });
    
    return res
      .status(201)
      .json(newUser);

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

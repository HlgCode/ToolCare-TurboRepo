const { Schedule } = require("../database/models");

exports.getAllSchedules = async (req, res) => {
  try {
    const schedule = await Schedule.findAll();
    res.json(schedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los cronogramas" });
  }
};

exports.getScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findByPk(id);
    if (schedule) {
      res.json(schedule);
    } else {
      res.status(404).json({ error: "Cronograma no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cronograma" });
  }
};

exports.createSchedule = async (req, res) => {
  const { title, startDate, dueDate, locationId } = req.body;
  try {
    const newSchedule = await Schedule.create({
      title,
      startDate,
      dueDate,
      locationId,
    });
    res.json(newSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el cronograma" });
  }
};

exports.updateSchedule = async (req, res) => {
  const { id } = req.params;
  const { title, startDate, dueDate, locationId } = req.body;
  try {
    const schedule = await Schedule.findByPk(id);
    if (schedule) {
      await schedule.update({ title, startDate, dueDate, locationId });
      res.json(schedule);
    } else {
      res.status(404).json({ error: "Cronograma no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el cronograma" });
  }
};

exports.deleteSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findByPk(id);
    if (schedule) {
      await schedule.destroy();
      res.json({ message: "Cronograma eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Cronograma no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el cronograma" });
  }
};

// -----------------------[Funciones para obtener asociaciones]--------------------------

/*exports.getScheduleMaintenances = async (req, res) => {
  try {
  } catch (error) {}
};*/

// -----------------------[Otras funciones]--------------------------

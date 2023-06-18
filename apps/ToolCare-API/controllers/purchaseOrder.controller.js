const { purchaseOrder } = require("../database/models");

exports.getAllOrders = async (req, res) => {
  try {
    const order = await purchaseOrder.findAll();
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las seorden" });
  }
};

exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await purchaseOrder.findByPk(id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: "orden no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la orden" });
  }
};

exports.createOrder = async (req, res) => {
  const { serial, pdfDocument, maintenanceId } = req.body;
  try {
    const newPurchaseOrder = await purchaseOrder.create({
      serial,
      pdfDocument,
      maintenanceId,
    });
    res.json(newPurchaseOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la orden" });
  }
};

exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const { serial, pdfDocument, maintenanceId } = req.body;
  try {
    const order = await purchaseOrder.findByPk(id);
    if (order) {
      await order.update({
        serial,
        pdfDocument,
        maintenanceId,
      });
      res.json(order);
    } else {
      res.status(404).json({ error: "orden no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la orden" });
  }
};

exports.deleteOrder = async (req, res) => {
  const id = req.params;
  try {
    const order = await purchaseOrder.findByPk(id);
    if (order) {
      await order.destroy();
      res.json({ message: "orden eliminada correctamente" });
    } else {
      res.Status(404).json({ error: "orden no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la orden" });
  }
};

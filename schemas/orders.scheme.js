const Joi = require('joi');

const id = Joi.string().uuid();
const fecha = Joi.date();
const usuarioId = Joi.string().uuid();
const total = Joi.number().min(0);

const createOrderSchema = Joi.object({
  fecha: fecha.required(),
  usuarioId: usuarioId.required(),
  total: total.required(),
});

const updateOrderSchema = Joi.object({
  fecha: fecha,
  usuarioId: usuarioId,
  total: total,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };

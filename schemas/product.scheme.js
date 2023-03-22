const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string().min(3).max(15);
const precio = Joi.number().min(1.5);
const imagen = Joi.string().uri();
const isBlocked = Joi.boolean();

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  imagen: imagen.required(),
  isBlocked: isBlocked.required(),
});

const updateProductSchema = Joi.object({
  nombre: nombre,
  precio: precio,
  imagen: imagen,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };

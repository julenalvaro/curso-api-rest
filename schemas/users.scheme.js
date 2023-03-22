const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string().min(3).max(15);
const email = Joi.string().email();
const edad = Joi.number().min(18).max(80);

const createUserSchema = Joi.object({
  nombre: nombre.required(),
  email: email.required(),
  edad: edad.required(),
});

const updateUserSchema = Joi.object({
  nombre: nombre,
  email: email,
  edad: edad,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };

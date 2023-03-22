const Joi = require('joi');

//es una chapuza pero es de dev, no de prod
const categories = [
      "Electrónica",
      "Hogar y cocina",
      "Ropa y accesorios",
      "Salud y cuidado personal",
      "Juguetes y juegos",
    ];

const id = Joi.string().uuid();
const nombre = Joi.string().valid(...categories);
const descripcion = Joi.string().min(3).max(400);

const createCategorySchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.required(),
});

const updateCategorySchema = Joi.object({
  nombre: nombre,
  descripcion: descripcion
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema };

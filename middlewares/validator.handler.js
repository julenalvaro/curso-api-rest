const boom = require('@hapi/boom');

//necesitamos crear middlewares de forma dinámica, en base a un esquema de validación y a una propiedad que queremos validar

function validatorHandler(schema, property) {
  return function(req, res, next) {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    //si hay error, lo enviamos al middleware de error
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validatorHandler;

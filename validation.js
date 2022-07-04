const Joi = require('joi')

const movieIdValidator = Joi.object({
    id: Joi.number().required(),
})

const movieNameValidator = Joi.object({
    name: Joi.string().alphanum()
})

module.exports = {movieIdValidator, movieNameValidator}
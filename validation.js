const Joi = require('joi')

const movieIdValidator = Joi.object({
    id: Joi.number().min(1).max(1000000).required(),
})

const movieNameValidator = Joi.object({
    // name: Joi.string().alphanum().min(2).max(30)
    name: Joi.string().regex(/^[ A-Za-z0-9&]*$/).required()
})

const movieValidator = Joi.object({
    id: Joi.number().min(1).max(1000000).required(),
    name: Joi.string().regex(/^[ A-Za-z0-9&]*$/).required()
})

module.exports = {movieIdValidator, movieNameValidator, movieValidator}
const Joi = require('joi')

const movieIdValidator = Joi.object({
    id: Joi.number().min(1).max(1000000).required(),
})

const movieNameValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
})

const movieValidator = Joi.object({
    id: Joi.number(),
    name: Joi.string().min(2)
})

module.exports = {movieIdValidator, movieNameValidator}
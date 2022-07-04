const {handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie, searchByName} = require('../controllers/Controller.js') 
const {movieIdValidator, movieNameValidator} = require('../validation.js')
const Joi = require('joi')
module.exports = [
{
    method: 'GET',
    path: '/',
    handler: handlerFunction
},
{
    method: 'GET',
    path: '/movies',
    handler: getAllMovies
},
{
    method: 'POST',
    path: '/movie',
    handler: postMovie
},
{
    method: 'PUT',
    path: '/movie/{id}',
    config: {
        handler: updateMovie,
        validate: {
            params: {
                id: Joi.number().min(1).max(100000).required()
            }
        }
    }
},
{
    method: 'DELETE',
    path: '/movie/{id}',
    config: {
        handler: deleteMovie,
        validate: {
            params: {
                id: Joi.number().min(1).max(100000).required()
            }
        }
    }
},
{
    method: 'GET',
    path: '/search/{name}',
    config: {
        handler: searchByName,
        validate: {
            params: {
                name: Joi.string().alphanum().min(2).max(30).required()
            }
        }
    }
}];

const {handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie, searchByName} = require('../controllers/Controller.js') 
const {movieIdValidator, movieNameValidator, movieValidator} = require('../validation.js')
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
            params: movieIdValidator
        }
    }
},
{
    method: 'DELETE',
    path: '/movie/{id}',
    config: {
        handler: deleteMovie,
        validate: {
            params: movieIdValidator
        }
    }
},
{
    method: 'GET',
    path: '/search/{name}',
    config: {
        handler: searchByName,
        validate: {
            params: movieNameValidator
    }
}
}];


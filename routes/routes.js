const {handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie, searchByName} = require('../controllers/Controller.js') 
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
    handler: updateMovie
},
{
    method: 'DELETE',
    path: '/movie/{id}',
    handler: deleteMovie
},
{
    method: 'GET',
    path: '/search/{name}',
    handler: searchByName
}];

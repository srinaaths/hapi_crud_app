const Hapi = require('hapi')
const {handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie, searchByName} = require('./controllers/Controller.js')

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
})

server.route([{
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
}
])

server.start(err => {
    if(err)
        console.log(err);
    console.log('listening');
});
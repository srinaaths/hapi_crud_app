const Hapi = require('hapi')
const routes = require('./routes/routes.js')

const {handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie, searchByName} = require('./controllers/Controller.js')

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
})

server.route(routes)

server.start(err => {
    if(err)
        console.log(err);
    console.log('listening');
});
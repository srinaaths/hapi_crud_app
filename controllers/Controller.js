const moviesList = require('../data.json')
const fs = require('fs')
const path = require('path')

const handlerFunction = (request, reply) => {
    reply('hi this is / request')
}

const getAllMovies = (request, reply) => {
    reply(moviesList).code(200)
}

const postMovie = (request, reply) => {
    const pathToWrite = path.join(__dirname, '..', 'data.json')
    const payload = request.payload;
    const size = moviesList.movies.length;
    payload.id = moviesList.movies[size - 1].id + 1;
    console.log(payload);
    moviesList.movies.push(payload)
    fs.writeFile(pathToWrite, JSON.stringify(moviesList), (err) => {
        if (err)
            console.log(err.message);
        console.log('success');
    })
    reply().code(201)
}

const updateMovie = (request, reply) => {
    const id = request.params.id;
    const payload = request.payload;
    payload.id = Number(request.params.id);
    let indexToUpdate;
    for(let i = 0; i < moviesList.movies.length; ++i) {
        if(moviesList.movies[i].id == id) {
            indexToUpdate = i;
        }
    }
    moviesList.movies.splice(indexToUpdate, 1, payload);
    const pathToWrite = path.join(__dirname, '..', 'data.json')
    fs.writeFile(pathToWrite, JSON.stringify(moviesList), (err) => {
        if (err)
            console.log(err.message);
        console.log('success');
    })
    reply.close();
}

const deleteMovie = (request, reply) => {
    const id = request.params.id;
    let indexToDelete;
    for(let i = 0; i < moviesList.movies.length; ++i) {
        if(moviesList.movies[i].id == id) {
            indexToDelete = i;
        }
    }
    moviesList.movies.splice(indexToDelete, 1);
    const pathToWrite = path.join(__dirname, '..', 'data.json')
    fs.writeFile(pathToWrite, JSON.stringify(moviesList), (err) => {
        if (err)
            console.log(err.message);
        console.log('success');
        reply('finished').code(200);
    })
    reply.close();
}

module.exports = {handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie}
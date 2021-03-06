const moviesList = require('../data.json')
const { movieIdValidator, movieNameValidator } = require('../validation.js')
const fs = require('fs')
const path = require('path')

const handlerFunction = (request, reply) => {
    reply('hi this is / request')
}

const getAllMovies = (request, reply) => {
    reply(moviesList).code(200)
}

const postMovie = async (request, reply) => {
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
    await reply({ "message": "movie created" }).code(201)
}

const updateMovie = async (request, reply) => {
    const id = Number(request.params.id);
    const payload = request.payload;
    payload.id = Number(request.params.id);
    let indexToUpdate;
    let flag = false;
    for (let i = 0; i < moviesList.movies.length; ++i) {
        if (moviesList.movies[i].id == id) {
            indexToUpdate = i;
            flag = true;
        }
    }
    console.log(flag);
    if (!flag) {
        reply({ "message": "no movie found to update" }).code(200);
    }
    else {
        moviesList.movies.splice(indexToUpdate, 1, payload);
        const pathToWrite = path.join(__dirname, '..', 'data.json')
        fs.writeFile(pathToWrite, JSON.stringify(moviesList), (err) => {
            if (err)
                console.log(err.message);
            console.log('success');
        })
        await reply({ "message": "movie updated" }).code(200);
    }
}

const deleteMovie = (request, reply) => {
    const id = Number(request.params.id);
    const { error, value } = movieIdValidator.validate({ id })
    let indexToDelete;
    let flag = false;
    for (let i = 0; i < moviesList.movies.length; ++i) {
        if (moviesList.movies[i].id == id) {
            indexToDelete = i;
            flag = true;
        }
    }
    if (!flag)
        reply({ "message": "movie not found" });
    else {
        moviesList.movies.splice(indexToDelete, 1);
        const pathToWrite = path.join(__dirname, '..', 'data.json')
        fs.writeFile(pathToWrite, JSON.stringify(moviesList), (err) => {
            if (err)
                console.log(err.message);
            console.log('success');
        })
        reply({ "message": "deleted" }).code(204);
    }
}

const searchByName = async (request, reply) => {
    const nameToSearch = request.params.name;
    const resArr = await moviesList.movies.filter((movie) => {
        if (movie.name === nameToSearch)
            return true;
    })
    if (resArr.length == 0)
        reply({ 'message': 'no movies found' }).code(200)
    else
        reply(resArr).code(200);
}

module.exports = { handlerFunction, getAllMovies, postMovie, updateMovie, deleteMovie, searchByName }
'use strict'
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/adriPolRockIt', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const data = [{
    title: 'Ciudad de dios',
    genre: 'Drama',
    plot: 'Buscape es un gran periodista que explica su infancia en una Favela llamada Ciudad de Dios'
}, {
    title: 'Scary Movie',
    genre: 'Terror/Comedia',
    plot: 'Parodia sobre diferentes peliculas de terror como Scream'
}, {
    title: 'Power Ranger',
    genre: 'Ciencia Ficción',
    plot: 'Jack Power reune a los Power Rangers para luchar contra los typos que se encuentran en nuestros codigos'

}]

async function addThreeCelebritys (data){
    for(let i = 0; i < data.length; i++){
        data[i] = await Movie.create({ title: data[i].title, genre: data[i].genre, plot: data[i].plot})
    }
    mongoose.connection.close();
}

addThreeCelebritys (data)
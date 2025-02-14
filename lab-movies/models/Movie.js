'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShema = new Schema({
    title: String,
    genre: String,
    plot: String,
    actors: Array
})

const Movie = mongoose.model('Movie',movieShema )

module.exports = Movie;
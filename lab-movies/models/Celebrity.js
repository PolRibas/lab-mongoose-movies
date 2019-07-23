'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebrityShema = new Schema({
    name: {type: String},
    occupation:{
        type: String,
        enum: ['unknown', 'actor', 'singer', 'comedian']
    },
    catchPhrase: {type: String}
})

const Celebrity = mongoose.model('Celebrity',celebrityShema )

module.exports = Celebrity;
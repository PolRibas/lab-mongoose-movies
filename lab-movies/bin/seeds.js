'use strict'
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/adriPolRockIt', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const data = [{
    name: 'Pol Ribas',
    occupation: 'comedian',
    catchPhrase: 'Intelligen without ambition is a bird without wings'
}, {
    name: 'Adri Porcel',
    occupation: 'comedian',
    catchPhrase: 'Iyo cabesa'
}, {
    name: 'Jack Power',
    occupation: 'unknown',
catchPhrase: 'Que pasa tios y tias'

}]

async function addThreeCelebritys (data){
    for(let i = 0; i < data.length; i++){
        data[i] = await Celebrity.create({ name: data[i].name, occupation: data[i].occupation, catchPhrase: data[i].catchPhrase})
    }
    mongoose.connection.close();
}

addThreeCelebritys (data)

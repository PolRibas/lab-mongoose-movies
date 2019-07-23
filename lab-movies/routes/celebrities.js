'use strict';
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try{
        const celebrities = await Celebrity.find();
        res.render('celebrities/index', {celebrities});
    }catch(err){
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try{
        const { name, occupation, catchPhrase } = req.body;
        await Celebrity.create({name,occupation,catchPhrase});
        res.redirect('/celebrities');
    }catch(err){
        next(err)
    }
});

router.post('/:id/delete', async(req, res, next) => {
    try{
        const { id } = req.params;
        await Celebrity.findById(id).remove();
        res.redirect('/celebrities');
    }catch(err){
        next(err)
    }
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});
router.get('/edit/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const celebrity = await Celebrity.findById(id);
        res.render('celebrities/edit', {celebrity});
    }catch(err){
        next(err)
    }
});

router.post('/edit/:id', async (req, res, next) => {
    try{
        const { name, occupation, catchPhrase } = req.body;
        const { id } = req.params;
        await Celebrity.findById(id).updateOne({name,occupation, catchPhrase});
        res.redirect('/celebrities');
    }catch(err){
        next(err)
    }
});

router.get('/celebrity/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const celebrity = await Celebrity.findById(id);
        res.render('celebrities/show', {celebrity});
    }catch(err){
        next(err)
    }
});

module.exports = router;

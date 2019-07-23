'use strict';
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const {isMoviesFormFilled, isIdvalid} = require('../middlewares/MoviesMiddlewares');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try{
        const movies = await Movie.find();
        res.render('movies/index', {movies});
    }catch(err){
        next(err)
    }
});

router.post('/', isMoviesFormFilled, async (req, res, next) => {
    try{
        const { title,genre,plot } = req.body;
        await Movie.create({title,genre,plot});
        res.redirect('/movies');
    }catch(err){
        next(err)
    }
});

router.post('/:id/delete',isIdvalid, async(req, res, next) => {
    try{
        const { id } = req.params;
        await Movie.findById(id).remove();
        res.redirect('/movies');
    }catch(err){
        next(err)
    }
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.get('/edit/:id', isIdvalid, async (req, res, next) => {
    try{
        const { id } = req.params;
        const movie = await Movie.findById(id);
        res.render('movies/edit', {movie});
    }catch(err){
        next(err)
    }
});

router.post('/edit/:id',isIdvalid, isMoviesFormFilled, async (req, res, next) => {
    try{
        const { title, genre, plot } = req.body;
        const { id } = req.params;
        await Movie.findById(id).updateOne({title, genre, plot});
        res.redirect('/movies');
    }catch(err){
        next(err)
    }
});

router.get('/movie/:id',isIdvalid, async (req, res, next) => {
    try{
        const { id } = req.params;
        const movie = await Movie.findById(id);
        res.render('movies/show', {movie});
    }catch(err){
        next(err)
    }
});
router.get('/AddCelebrity/:id', isIdvalid, async (req,res,next)=>{
    try{
        res.render('movies/addCelebrity')
    }catch(err){
        next(err)
    }
})

module.exports = router;
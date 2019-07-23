'use strict';
const mongoose = require('mongoose');
const isMoviesFormFilled = (req,res,next) => {
    const {title,genre,plot} = req.body;
    if(!title || !genre || !plot){
        return res.redirect(`/movies${req.path}`)
    }
    next();
}
const isIdvalid = (req, res, next) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.redirect(`/celebrities`)
    }
    next();
}
module.exports = {isMoviesFormFilled, isIdvalid}

'use strict';
const mongoose = require('mongoose');
const isCelebritysFormFilled = (req,res,next) => {
    const {name,occupation,catchPhrase} = req.body;
    if(!name || !occupation || !catchPhrase){
        return res.redirect(`/celebrities${req.path}`)
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

module.exports = {isCelebritysFormFilled, isIdvalid}

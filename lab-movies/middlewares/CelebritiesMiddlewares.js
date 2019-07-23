'use strict';

const isCelebritysFormFilled = (req,res,next) => {
    const {name,occupation,catchPhrase} = req.body;
    if(!name || !occupation || !catchPhrase){
        return res.redirect(`/celebrities${req.path}`)
    }
    next();
}

module.exports = {isCelebritysFormFilled}

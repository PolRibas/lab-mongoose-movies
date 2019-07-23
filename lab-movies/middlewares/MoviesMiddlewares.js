'use strict';

const isMoviesFormFilled = (req,res,next) => {
    const {title,genre,plot} = req.body;
    if(!title || !genre || !plot){
        return res.redirect(`/movies${req.path}`)
    }
    next();
}

module.exports = {isMoviesFormFilled}

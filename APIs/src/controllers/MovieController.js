const Movie = require('../models/Movie');

const createMovie = async(req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
};

const updateMovie = async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
            // console.log(movie)
            // const updatedMovie = await Movie.findByIdAndUpdate(
            //     req.params.id, {
            //         $set: req.body,
            //     }, { new: true }
            // );
            // res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

const deleteMovie = async(req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndUpdate(req.params.id, { isDestroy: true });
            res.status(200).json("Delete movie successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

const findMovie = async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
}

const findAllMovie = async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

const findRandomMovie = async(req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { createMovie, updateMovie, deleteMovie, findMovie, findAllMovie, findRandomMovie };
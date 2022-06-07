const Movie = require('../models/Movie');

const createMovie = async(req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        if (!newMovie.subtitle.en) {
            newMovie.subtitle.en = newMovie.title;
        }
        if (!newMovie.subtitle.vi) {
            newMovie.subtitle.vi = newMovie.title;
        } else if (!newMovie.subtitle.indo) {
            newMovie.subtitle.indo = newMovie.title;
        }
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
            await Movie.findByIdAndUpdate(req.params.id, req.body);
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

const searchMovie = async(req, res) => {
    const q = req.query.q;
    let movie = await Movie.find();
    if (q) {
        result = movie.filter((m) => {
            return m.title.toLowerCase().indexOf(q.toLowerCase()) !== -1 || m.year.toLowerCase().indexOf(q.toLowerCase()) !== -1 || m.limit.toLowerCase().indexOf(q.toLowerCase()) !== -1 || m.genre.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })
        res.status(200).json(result);
    } else {
        res.status(203).json([]);
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

module.exports = { createMovie, updateMovie, deleteMovie, findMovie, searchMovie, findAllMovie, findRandomMovie };
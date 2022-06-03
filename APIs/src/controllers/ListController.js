const List = require('../models/List');

const getList = async(req, res, next) => {
    try {
        const list = await List.find({ isDestroy: false });
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
}

const createList = async(req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

//update list 
const updateList = async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(201).json(updatedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

const deleteList = async(req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndUpdate(req.params.id, { isDestroy: true });
            res.status(201).json("The list has been delete...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

const randomList = async(req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { getList, createList, updateList, deleteList, randomList }
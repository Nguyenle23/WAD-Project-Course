const express = require('express');
const router = express.Router();

const movieController = require('../controllers/MovieController');

const verify = require('../middlewares/verify');

router.post('/', verify, movieController.createMovie);
router.put('/:id', verify, movieController.updateMovie);
router.delete('/:id', verify, movieController.deleteMovie);
router.get('/find/:id', verify, movieController.findMovie);
router.get('/', verify, movieController.findAllMovie);
router.get('/random', verify, movieController.findRandomMovie);


module.exports = router;
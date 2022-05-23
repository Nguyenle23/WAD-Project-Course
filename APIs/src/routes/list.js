const express = require('express');
const router = express.Router();

const listController = require('../controllers/ListController');

const verify = require('../middlewares/verify');

router.post('/', verify, listController.createList);
router.delete('/:id', verify, listController.deleteList);
router.get('/', verify, listController.findList);

module.exports = router;
const express = require('express');
const router = express.Router();

const listController = require('../controllers/ListController');

const verify = require('../middlewares/verify');

router.get('/', verify, listController.getList);
router.post('/', verify, listController.createList);
router.put('/:id', verify, listController.updateList);
router.delete('/:id', verify, listController.deleteList);
router.get('/randomList', verify, listController.randomList);

module.exports = router;
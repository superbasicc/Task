var express = require('express');
var router = express.Router();

const ctrl = require('./controllers')

router.get('/1-1', ctrl.task1Part1)
router.get('/1-2', ctrl.task1Part2)
router.get('/2', ctrl.task2)

module.exports = router;

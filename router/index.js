const { Router } = require('express');
const todoRouter = require('./todo');

const router = Router();

router.use('/todo', todoRouter);

module.exports = router;

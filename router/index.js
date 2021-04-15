const { Router } = require('express');
const todoRouter = require('./todoRouter');

const router = Router();

router.use('/todo', todoRouter);

module.exports = router;

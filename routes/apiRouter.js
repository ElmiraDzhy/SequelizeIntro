const express = require("express");
const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');

const apiRouter = express.Router();

apiRouter.use('/users/', userRouter);
apiRouter.use('/tasks/', taskRouter);

module.exports = apiRouter;
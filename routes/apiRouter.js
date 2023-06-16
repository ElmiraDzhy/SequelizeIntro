const express = require("express");
const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');
const groupRouter = require('./groupRouter');

const apiRouter = express.Router();

apiRouter.use('/users/', userRouter);
apiRouter.use('/tasks/', taskRouter);
apiRouter.use('/groups/', groupRouter);

module.exports = apiRouter;
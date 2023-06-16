const UserController = require("../controllers/User.controller");
const {pagination} = require("../middleware/pagination.mw");
const express = require("express");
const userRouter = express.Router();
userRouter.post('/users/', UserController.createOne);
userRouter.get('/users/:id', UserController.getOne);
userRouter.get('/users/', pagination, UserController.getAll);
userRouter.put('/users/:id', UserController.updateOne);
userRouter.delete('/users/:id', UserController.deleteOne);

module.exports = userRouter;
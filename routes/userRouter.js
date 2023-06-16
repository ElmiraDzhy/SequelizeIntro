const UserController = require("../controllers/User.controller");
const {pagination} = require("../middleware/pagination.mw");

const express = require("express");
const userRouter = express.Router();

userRouter.post('/', UserController.createOne);
userRouter.get('/:id', UserController.getOne);
userRouter.get('/', pagination, UserController.getAll);
userRouter.put('/:id', UserController.updateOne);
userRouter.delete('/:id', UserController.deleteOne);

module.exports = userRouter;
const express = require("express");
const UserController = require('../controllers/User.controller');
const apiRouter = express.Router();
apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.getOne);
apiRouter.get('/users/', UserController.getAll);

module.exports = apiRouter;
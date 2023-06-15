const express = require("express");
const UserController = require('../controllers/User.controller');
const apiRouter = express.Router();
apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.getOne);
apiRouter.get('/users/', UserController.getAll);
apiRouter.put('/users/:id',);
apiRouter.delete('/users/:id', UserController.deleteOne);

module.exports = apiRouter;
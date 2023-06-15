const express = require("express");
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const apiRouter = express.Router();
apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.getOne);
apiRouter.get('/users/', UserController.getAll);
apiRouter.put('/users/:id', UserController.updateOne);
apiRouter.delete('/users/:id', UserController.deleteOne);

apiRouter.post('/tasks/', TaskController.createOne);
apiRouter.get('/tasks/:id', TaskController.getAllUserTasks);

module.exports = apiRouter;
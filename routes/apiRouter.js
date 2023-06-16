const express = require("express");
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const {pagination} = require('../middleware/pagination.mw');

const apiRouter = express.Router();

apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.getOne);
apiRouter.get('/users/', pagination, UserController.getAll);
apiRouter.put('/users/:id', UserController.updateOne);
apiRouter.delete('/users/:id', UserController.deleteOne);

apiRouter.post('/tasks/', TaskController.createOne);
apiRouter.get('/tasks/:id', TaskController.getAllUserTasks);
apiRouter.put('/tasks/:id', TaskController.updateOne);
apiRouter.delete('/tasks/:userId/:taskId', TaskController.deleteOne);

//tasks
apiRouter.get('/tasks/:id/count', TaskController.getTaskQuantity);

module.exports = apiRouter;
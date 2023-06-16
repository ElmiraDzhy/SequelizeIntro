const TaskController = require("../controllers/Task.controller");
const express = require("express");
const taskRouter = express.Router();

taskRouter.post('/tasks/', TaskController.createOne);
taskRouter.get('/tasks/:id', TaskController.getAllUserTasks);
taskRouter.put('/tasks/:id', TaskController.updateOne);
taskRouter.delete('/tasks/:userId/:taskId', TaskController.deleteOne);
taskRouter.get('/tasks/:id/count', TaskController.getTaskQuantity);

module.exports = taskRouter;
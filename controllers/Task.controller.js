const {Task, User} = require('../models');
//first var
// module.exports.createOne = async (req, res, next) => {
//     try {
//         const {body: {body, isDone, userId}} = req;
//         const createdTask = await Task.create({body, isDone, userId});
//         res.status(201).send(createdTask);
//
//     } catch (err) {
//         next(err);
//     }
// }

module.exports.createOne = async (req, res, next) => {
    try {
        const {body: {body, isDone, userId}} = req;
        const userInstance = await User.findByPk(userId);
        const createdTask = await userInstance.createTask({body, isDone});
        res.status(201).send(createdTask);

    } catch (err) {
        next(err);
    }
}

module.exports.getAllUserTasks = async (req, res, next) => {
    try {
        const {params: {id: userId}} = req;
        const userInstance = await User.findByPk(userId);
        const userTasks = await userInstance.getTasks();
        res.status(200).send(userTasks);

    } catch (err) {
        next(err);
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {params: {id}} = req; //task id
        const {body} = req; // data for updating
        const [rows, data] = await Task.update(body, {where: {id: Number(id)}, returning: true});
        if (rows) {
            return res.status(200).send(data);
        }
        res.status(404).send('not found');
    } catch
        (err) {
        next(err);
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {userId, taskId}} = req; //task id
        const taskToRemove = await Task.findByPk(taskId);
        // const userInstance = await User.findByPk(userId);
        // const result = await userInstance.removeTask(taskToRemove);
        if(!taskToRemove){
            return res.status(404).send('Task not found');
        }
        const result = await taskToRemove.destroy()
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}


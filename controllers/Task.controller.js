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

module.exports.getAllUserTasks = async (req, res, next)=> {
    try{
        const {params: {id: userId}} = req;
        const userInstance = await User.findByPk(userId);
        const userTasks = await userInstance.getTasks();
        res.status(200).send(userTasks);

    }catch(err){
    next(err);
    }
}
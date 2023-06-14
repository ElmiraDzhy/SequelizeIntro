const {User} = require('../models/index');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send(createdUser);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message)
    }
}

module.exports.getOne = async (req, res, next) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(404).send(err.message);
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(404).send(err.message);
    }
}
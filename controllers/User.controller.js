const {User} = require('../models/index');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send(createdUser);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports.getOne = async (req, res, next) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundedUser = await User.findByPk(id); //return instance of User
        const returnedValue = await foundedUser.destroy();
        res.status(200).send(returnedValue);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

// another way to delete user:
module.exports.deleteOneStatic = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const rowCount = await User.destroy({where: {id: Number(id)}}); // return deleted rows count
        if (rowCount) {
            return res.status(200);
        }
        return res.status(404).send('not found');
    } catch (err) {
        next(err);
    }
}


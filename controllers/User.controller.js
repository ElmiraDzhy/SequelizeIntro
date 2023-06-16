const {User} = require('../models/index');
const createError = require('http-errors');

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
        if (!user) {
            const error = createError(404, 'User not found');
            return next(error);
        }
        res.status(200).send({data: user});
    } catch (err) {
        next(err);
    }
}

module.exports.getAll = async (req, res, next) => {
    //todo : fix this method
    try {
        const {pagination} = req;
        // have pagination object already
        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            },
            ...req.pagination
        });
        res.status(200).send({data: users});
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
        res.status(200).send({meta: returnedValue});
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

//static method
//user update
module.exports.updateOneStatic = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const rowCount = await User.update(req.body, {where: {id: Number(id)}}); // return deleted rows count
        if (rowCount) {
            return res.status(200);
        }
        res.status(404).send('not found');
    } catch (err) {
        next(err);
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundedUser = await User.findByPk(id); //return instance of User
        const returnedValue = await foundedUser.update(req.body, {returning: true});
        res.status(200).send(returnedValue);
    } catch (err) {
        console.log(err);
        next(err);
    }
}


/*
* api
*
* data - info (object)
* errors - errors if exist (object)
* meta - metainfo is exist
*/
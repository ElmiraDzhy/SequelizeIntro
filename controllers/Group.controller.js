const {Group, User} = require('../models')

module.exports.createGroup = async (req, res, next) => {
    try {
        const {body} = req;
        const createdGroup = await Group.create(body);
        res.status(201).send({data: createdGroup})
    } catch (err) {
        next(err)
    }
}

module.exports.addUserToGroup = async (req, res, next) => {
    try {
        const {params: {groupId, userId}} = req;
        const groupInstance = await Group.findByPk(groupId);
        const userInstance = await User.findByPk(userId);
        await groupInstance.addUser(userInstance);
        res.status(200).send({
            meta: {
                groupAdded: groupId
            }
        });
    } catch (err) {
        next(err)
    }
}

module.exports.countUsersInGroup = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const groupInstance = await Group.findByPk(Number(id));
        const result = await groupInstance.countUsers();
        res.status(200).send({data: {users: result}});
    } catch (err) {
        next(err)
    }
}

module.exports.getGroupWithUsers = async (req, res, next) => {
    console.log('here')
    try {
        const {params: {id}} = req;
        const groupWithMembers = await Group.findAll(
            {
                include: [{
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
                }],
                where: {
                    id: Number(id)
                }
            }
        );
        res.status(200).send({data: groupWithMembers});
    } catch (err) {
        next(err)
    }
}

module.exports.removeUserFromGroup = async (req, res, next) => {
    try {
        const {params: {groupId, userId}} = req;
        const groupInstance = await Group.findByPk(groupId);
        const userInstance = await User.findByPk(userId);
        const result = await groupInstance.removeUser(userInstance);
        res.status(200).send({data: {rows: result}});
    } catch (err) {
        next(err)
    }
}

module.exports.updateGroup = async (req, res, next) => {
    try {
        const {params: {groupId} } = req;
        const group = await Group.findByPk(groupId)
        const updatedGroup = await group.update(req.body, {returning: true});
        res.status(200).send({data: updatedGroup})
    } catch (err) {
        next(err)
    }
}

module.exports.removeGroup = async (req, res, next) => {
    try {
        const {params: {groupId} } = req;
        const result = await Group.destroy({where: {id: Number(groupId)}});
        console.log(result)
        res.status(200).send({data: result});
    } catch (err) {
        next(err)
    }
}
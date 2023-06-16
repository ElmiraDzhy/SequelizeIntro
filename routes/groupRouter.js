const express = require("express");
const groupRouter = express.Router();
const GroupController = require('../controllers/Group.controller');

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:id/count', GroupController.countUsersInGroup);
groupRouter.get('/:id', GroupController.getGroupWithUsers);
groupRouter.delete('/:groupId/:userId', GroupController.removeUserFromGroup);
groupRouter.delete('/:groupId', GroupController.removeGroup);

module.exports = groupRouter;

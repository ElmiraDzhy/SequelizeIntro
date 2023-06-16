const express = require("express");
const groupRouter = express.Router();
const GroupController = require('../controllers/Group.controller');

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:id/count', GroupController.countUsersInGroup);
groupRouter.post('/', );

module.exports = groupRouter;

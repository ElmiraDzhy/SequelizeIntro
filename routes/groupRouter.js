const express = require("express");
const groupRouter = express.Router();
const GroupController = require('../controllers/Group.controller');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:id/count', GroupController.countUsersInGroup);
groupRouter.get('/:id', GroupController.getGroupWithUsers);
groupRouter.delete('/:groupId/:userId', GroupController.removeUserFromGroup);
groupRouter.delete('/:groupId', GroupController.removeGroup);
// groupRouter.patch('/:groupId', GroupController.updateGroup);

groupRouter.patch('/:groupId', GroupController.createImage);
module.exports = groupRouter;

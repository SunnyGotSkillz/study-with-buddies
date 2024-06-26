const express = require('express');
const route = express.Router();
const cors = require('cors');

// controller functions
const {
  loginUser,
  signupUser,
  getUsers,
  updateUser,
  addGroup,
  getUserGroups,
  getAllUsers,
  getUserById,
  updateProfile,
  removeGroup,
  getUsersbyCourse
} = require('../Controller/usercontroller');

route.post('/login', loginUser);

route.post('/signup', signupUser);

route.post('/getUsers', cors(), getUsers);

route.patch('/updateUser', updateUser);

route.patch('/addGroup/:id', addGroup);

route.patch('/removeGroup/:id', removeGroup);

route.get('/getUserGroups/:id', getUserGroups);

route.get('/getAllUsers', getAllUsers);

route.get('/getUserByID/:id', getUserById);

route.patch('/updateProfile/:id', updateProfile);

route.post('/findbuddy', getUsersbyCourse);

module.exports = route;

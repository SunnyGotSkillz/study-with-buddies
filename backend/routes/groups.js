const express = require('express');
const group = require('..models/groupModel')


const route = express.Router()

const {
    createGroup,
    getGroup,
    getAllGroups,
    deleteGroup,
    updateGroup
} = require('../Controller/groupcontroller')




route.get('/', getAllGroups)

route.get('/:id', getGroup)
    
route.post('/', createGroup)
    
route.delete('/:id', deleteGroup)
    
route.patch('/:id', updateGroup)
    
module.exports = route


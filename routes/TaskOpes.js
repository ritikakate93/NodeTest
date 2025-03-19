const express = require('express');
const routes = express.Router();

// Create a new task (accessible to Admin and Manager roles).
const User = require('../models/UserSchema');
const Task  = require('../models/TaskSchema');


routes.post('/tasks',async(req,res)=>{
    try{
        console.log(req.body)
        const task = new Task({...req.body,createdBy:'67da9d0a282cd3bcdda1b026',assignee:'67da9d29282cd3bcdda1b027'});
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

routes.get('/tasks',async (req, res) => {
    try{
        const getTask = await Task.find();
        res.status(200).json(getTask);
    } catch (err) {
        console.error(err);
    }
});

routes.get('/tasks/:id',async (req, res) => {
    try{
        const getTask = await Task.findById(req.params.id);
        res.status(200).json(getTask);
    } catch (err) {
        console.error(err);
    }
});

routes.put('/tasks/:id',async (req, res) => {
    try{
        const updateTask = await Task.findByIdAndUpdate( req.params.id,req.body,{new : true});
        res.status(200).json(updateTask);
    } catch (err) {
        console.error(err);
    }
});


routes.delete('/tasks/:id',async (req, res) => {
    try{
        const id = req.params.id;
        const deleteTask = await Task.findByIdAndDelete(id);
        res.status(200).json("task deleted");
    } catch (err) {
        console.error(err);
    }
});






module.exports = routes;
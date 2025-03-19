const mongoose = require('mongoose');
const User = require('./UserSchema');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type: String, required: true},
  status: { type: String,enum: ["Pending", "Completed"], default: "Pending" },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref : "User"},
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref : "User"},
}, { timestamps: true });


module.exports = mongoose.model('Task', TaskSchema);

//title, description, status (e.g., Pending, Completed), assignee (reference to a User), createdBy.
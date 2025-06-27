
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    status: {
      type: String,
      enum: ['todo', 'in-progress', 'done'],
      default: 'todo'
    },
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
}, { timestamps: true });
  



const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
  
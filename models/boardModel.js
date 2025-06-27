
const mongoose = require("mongoose");


const boardSchema = new mongoose.Schema({
  boardName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
}, { timestamps: true });


const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
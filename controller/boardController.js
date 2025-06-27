const Board = require('../models/boardModel');

const handleGetBoards = async (req, res) => {
  try {
    const boards = await Board.find({ userId: req.user.id });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleCreateBoard = async (req, res) => {
    try {
        const { boardName } = req.body;
        const userId = req.user.id;
    const board = new Board({ boardName, userId });
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const handleDeleteBoard = async (req, res) => {
  try {
    await Board.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Board deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {handleCreateBoard, handleGetBoards, handleDeleteBoard};

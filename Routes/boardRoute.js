const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares');
const { handleGetBoards, handleCreateBoard, handleDeleteBoard } = require('../controller/boardController');

/**
 * @swagger
 * /api/boards:
 *   get:
 *     summary: Get all boards for the authenticated user
 *     tags: [Boards]
 *     responses:
 *       200:
 *         description: List of boards
 */


/**
 * @swagger
 * /api/boards:
 *   post:
 *     summary: Create a new board
 *     tags: [Boards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Board created
 */


/**
 * @swagger
 * /api/boards/{id}:
 *   delete:
 *     summary: Delete a board by ID
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Board deleted
 */


router.get('/board', authMiddleware, handleGetBoards);

router.post('/board', authMiddleware, handleCreateBoard);

router.delete('/board/:id', authMiddleware, handleDeleteBoard);

module.exports = router;
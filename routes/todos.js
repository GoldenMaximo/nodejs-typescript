"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = express_1.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    return res.status(200).json({ message: 'Todo added', newTodo, todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(e => e.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'Updated successefully', todos });
    }
    return res.status(404).json({ message: 'Todo not found ' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(e => e.id === tid);
    if (todoIndex >= 0) {
        todos = todos.filter(e => e.id !== tid);
        return res.status(200).json({ message: 'Updated successefully', todos });
    }
    return res.status(404).json({ message: 'not found ' });
});
exports.default = router;

const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            task: req.body.task,
            description: req.body.description,
            completed: req.body.completed || false,
        });
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};

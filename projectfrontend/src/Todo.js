import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
    };

    const addTodo = async () => {
        const newTodo = {
            task,
            description,
            completed: false
        };
        await axios.post('http://localhost:5000/api/todos', newTodo);
        setTask('');
        setDescription('');
        fetchTodos();
    };

    const updateTodo = async (id, updatedTodo) => {
        await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        fetchTodos();
    };

    return (
        <div className="container">
            <nav className="navbar">
                <h1>Todo List</h1>
            </nav>
            <div className="todo-section">
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Task"
                        className="input"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button className="submit-button" onClick={addTodo}>Add Todo</button>
                </div>
                <ul>
                    {todos.map(todo => (
                        <li key={todo._id}>
                            <h2>{todo.task}</h2>
                            <p>{todo.description}</p>
                            <div className='div-button'>
                                <button className='button' id='yellow' onClick={() => updateTodo(todo._id, { ...todo, completed: !todo.completed })}>
                                    {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                                </button>
                                <button className='button' id='red' onClick={() => deleteTodo(todo._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;

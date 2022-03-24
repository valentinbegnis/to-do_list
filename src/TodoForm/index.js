import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add a new task</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Finish my homework'
            />
            <div>
                <button 
                    onClick={onCancel}
                    type='button'
                >
                    Cancel
                </button>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
}

export { TodoForm };
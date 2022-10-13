import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = useState('');
    const [newPlaceholder, setNewPlaceholder] = useState('Finish my homework');

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
        if (newTodoValue !== '') {
            addTodo(newTodoValue);
            setOpenModal(false);
        } else {
            setNewPlaceholder('Oops! You have to type a task before adding it');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add a new task</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder={newPlaceholder}
            />
            <div className='buttons-container'>
                <button 
                    onClick={onCancel}
                    type='button'
                    cursor='pointer'
                >
                    Cancel
                </button>
                <button type='submit' cursor='pointer'>Add</button>
            </div>
        </form>
    );
}

export { TodoForm };
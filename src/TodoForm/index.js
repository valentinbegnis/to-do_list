import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = useState('');
    // const [newId, setNewId] = useState(0);

    const {
        addTodo,
        setOpenModal,
        setActiveClass
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
        setActiveClass(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // setNewId(newId + 1);
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
            <div className='buttons-container'>
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
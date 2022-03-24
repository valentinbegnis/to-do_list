import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <div className='tasks-counter-container'>
      <h2 className="TodoCounter">Completed tasks: <span>{completedTodos} of {totalTodos}</span></h2>
    </div>
  );
}

export { TodoCounter };
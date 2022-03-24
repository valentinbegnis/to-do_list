import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <div className='tasks-counter-container'>
      <h2 className="TodoCounter">You have completed {completedTodos} tasks</h2>
      <h2 className='total-tasks'>Total tasks: {totalTodos}</h2>
    </div>
  );
}

export { TodoCounter };
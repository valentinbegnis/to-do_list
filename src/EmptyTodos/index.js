import React from 'react';
import './EmptyTodos.css';

function EmptyTodos () {
    return (
        <div className='no-tasks-message'>
            <img className='no-results' src={require('../assets/noresults.png')} alt='asdad'/>
            <h3>Oh! You don't have any tasks</h3>
            <p>Add a new one!</p>
            <img className='arrow' src={require('../assets/arrow.png')} alt='arrow'/>
        </div>
    );
}

export { EmptyTodos };
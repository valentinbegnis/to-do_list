import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import './TodoSearch.css';

function TodoSearch (){
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className='TodoSearch-container'>
            <TodoCounter />
            <input 
                className="TodoSearch" 
                placeholder="Search a task"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch };
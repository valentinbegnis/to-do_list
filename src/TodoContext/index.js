import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [activeClass, setActiveClass] = useState(false);
  
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if (searchValue.length < 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }
  
    const toggleCompleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = todos.findIndex(todo => todo.text === text);
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    };

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        // id,
        completed: false,
        text,
      });
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = todos.findIndex(todo => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            activeClass,
            setActiveClass
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
import React from 'react';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function TodosContainer ({ searchedTodos, toggleCompleteTodo, deleteTodo }) {
  return (
    <section>
      <TodoSearch /> 
      <TodoList>
      { 
        searchedTodos.map((todo, index) => (
        <TodoItem 
          // key={todo.text} 
          key={index} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => toggleCompleteTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
        ))
      }
      </TodoList>
    </section>
  );
}

export { TodosContainer };
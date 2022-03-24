import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../EmptyTodos' 
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { Header } from '../Header';

function AppUI () {
    const {
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);
        
    return (
        <React.Fragment>
            <Header />
            {searchedTodos.length ? <TodoSearch /> : null}

            <TodoList>
                {!searchedTodos.length && <EmptyTodos />}

                { 
                    searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))
                }
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };
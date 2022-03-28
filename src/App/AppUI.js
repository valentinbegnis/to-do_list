import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { Header } from '../Header';
import { EmptyTodos } from '../EmptyTodos' 
import { TodosContainer } from '../TodosContainer';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI () {
    const {
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        activeClass,
        setActiveClass
    } = useContext(TodoContext);
        
    return (
        <React.Fragment>
            <Header />
            {
                localStorage.getItem('TODOS_V1') === '[]'
                    ? <EmptyTodos />
                    : <TodosContainer
                         searchedTodos={searchedTodos}
                         toggleCompleteTodo={toggleCompleteTodo}
                         deleteTodo={deleteTodo}
                        />
            }
            {
                openModal && 
                (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
            <CreateTodoButton 
                setOpenModal={setOpenModal}
                activeClass={activeClass}
                setActiveClass={setActiveClass}
            />
        </React.Fragment>
    );
}

export { AppUI };
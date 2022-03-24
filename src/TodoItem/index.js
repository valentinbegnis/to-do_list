import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import './TodoItem.css';

function TodoItem (props) {
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <BsCheck className='check-size'/>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>

            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <ImCross className='cross-size'/>
            </span>
        </li>
    );
}

export { TodoItem };
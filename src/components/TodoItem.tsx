import React from 'react';
import { TodoItem as TodoItemType } from '../../types';

interface TodoItemProps {
  todo: TodoItemType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li
      className="flex justify-between items-center p-4 bg-white shadow-md rounded mb-2"
      role="listitem"
      aria-label={
        todo.completed ? `${todo.label}, completed` : `${todo.label}, pending`
      }
    >
      <span
        className={`block ${
          todo.completed ? 'line-through text-gray-500' : ''
        }`}
        aria-hidden="true"
      >
        {todo.label}
      </span>
      <span
        className={todo.completed ? 'text-green-500' : 'text-red-500'}
        aria-label={todo.completed ? 'Completed' : 'Pending'}
      >
        {todo.completed ? 'Completed' : 'Pending'}
      </span>
    </li>
  );
};

export default TodoItem;

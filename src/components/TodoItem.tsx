import React from 'react';
import { CheckBadgeIcon, TrashIcon } from '@heroicons/react/24/solid';
import { TodoItem as TodoItemType } from '../../types';

interface TodoItemProps {
  todo: TodoItemType;
  onClickDelete: (todo: TodoItemType) => void;
  toggleTodoStatus: (todo: TodoItemType) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onClickDelete,
  toggleTodoStatus,
}) => {
  return (
    <li
      className="flex justify-between items-center p-4 bg-white shadow-md rounded mb-2"
      role="listitem"
      aria-label={
        todo.completed ? `${todo.label}, completed` : `${todo.label}, pending`
      }
    >
      <span>
        <input
          type="checkbox"
          className="peer mt-2 h-5 w-5 mcursor-pointer transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
          id="check1"
          checked={todo.completed}
          onChange={() => toggleTodoStatus(todo)}
        />
      </span>
      <span
        className={`block ${
          todo.completed ? 'line-through text-gray-500' : ''
        }`}
        aria-hidden="true"
      >
        {todo.label}
      </span>
      <span
        className={todo.completed ? 'text-green-600' : 'text-red-500'}
        aria-label={todo.completed ? 'Completed' : 'Pending'}
      >
        {todo.completed ? 'Completed' : 'Pending'}
      </span>
      {todo.completed && <CheckBadgeIcon className="size-6 text-green-600" />}
      {!todo.completed && (
        <button
          aria-label="delete-todo"
          role="button"
          onClick={() => onClickDelete(todo)}
          data-id={todo.id}
        >
          <TrashIcon className="size-6 text-red-600 cursor-pointer" />
        </button>
      )}
    </li>
  );
};

export default TodoItem;

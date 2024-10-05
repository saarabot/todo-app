import React from 'react';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from '../../types';

interface TodoListProps {
  todos: TodoItemType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="w-full">
      {todos.length > 0 ? (
        <ul role="list" aria-label="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;

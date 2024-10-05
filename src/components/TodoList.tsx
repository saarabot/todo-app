import React from 'react';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from '../../types';

interface TodoListProps {
  todos: TodoItemType[];
  removeTodo: (todo: TodoItemType) => void;
  toggleTodoStatus: (todo: TodoItemType) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  removeTodo,
  toggleTodoStatus,
}) => {
  return (
    <div className="w-full">
      {todos.length > 0 ? (
        <ul role="list" aria-label="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodoStatus={toggleTodoStatus}
              onClickDelete={removeTodo}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;

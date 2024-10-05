import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { TodoItem as TodoItemType } from '../../types';
import { vi } from 'vitest';

describe('TodoList', () => {
  const todos: TodoItemType[] = [
    { id: 1, label: 'Todo 1', completed: false },
    { id: 2, label: 'Todo 2', completed: true },
  ];
  const removeTodo = vi.fn();
  const toggleTodoStatus = vi.fn();

  it('should render a list of todos', () => {
    render(
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoStatus={toggleTodoStatus}
      />
    );

    expect(screen.getByText(/Todo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Todo 2/i)).toBeInTheDocument();
  });

  it('should not render anything when no todos exist', () => {
    render(
      <TodoList
        todos={[]}
        removeTodo={removeTodo}
        toggleTodoStatus={toggleTodoStatus}
      />
    );

    expect(screen.queryByRole('list')).toBeNull();
  });

  it('should call removeTodo when delete button is clicked', () => {
    render(
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoStatus={toggleTodoStatus}
      />
    );

    // Simulate clicking the delete button for "Todo 1"
    fireEvent.click(screen.getAllByRole('button', { name: /delete-todo/i })[0]);

    // Check if removeTodo was called with the correct todo item
    expect(removeTodo).toHaveBeenCalledWith(todos[0]);
    expect(removeTodo).toHaveBeenCalledTimes(1); // Ensure it was called once
  });
});

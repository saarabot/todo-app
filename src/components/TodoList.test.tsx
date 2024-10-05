// src/components/TodoList.test.tsx
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { TodoItem as TodoItemType } from '../../types';

describe('TodoList', () => {
  const todos: TodoItemType[] = [
    { id: 1, label: 'Todo 1', completed: false },
    { id: 2, label: 'Todo 2', completed: true },
  ];

  it('should render a list of todos', () => {
    render(<TodoList todos={todos} />);

    expect(screen.getByText(/Todo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Todo 2/i)).toBeInTheDocument();
  });

  it('should not render anything when no todos exist', () => {
    render(<TodoList todos={[]} />);

    expect(screen.queryByRole('list')).toBeNull();
  });
});

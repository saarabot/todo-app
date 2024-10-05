// src/components/TodoItem.test.tsx
import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from '../../types';
import { vi } from 'vitest';

describe('TodoItem', () => {
  const todo: TodoItemType = {
    id: 1,
    label: 'Sample Todo',
    completed: false,
  };
  const onClickDelete = vi.fn();

  it('should display the correct label and status', () => {
    render(<TodoItem todo={todo} onClickDelete={onClickDelete} />);

    expect(screen.getByText(/Sample Todo/i)).toBeInTheDocument();
    expect(screen.getByText(/Pending/i)).toBeInTheDocument();
  });

  it('should display completed status when todo is done', () => {
    const completedTodo = { ...todo, completed: true };
    render(<TodoItem todo={completedTodo} onClickDelete={onClickDelete} />);

    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
  });
});

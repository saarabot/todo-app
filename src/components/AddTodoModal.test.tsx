// src/components/AddTodoModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoModal from './AddTodoModal';
import { vi } from 'vitest';

describe('AddTodoModal', () => {
  it('should render the modal and handle form submission', () => {
    const onAddTodo = vi.fn();
    const onClose = vi.fn();

    render(<AddTodoModal onClose={onClose} onAddTodo={onAddTodo} />);

    const input = screen.getByLabelText(/Todo label/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });

    const submitButton = screen.getByRole('button', { name: /Add Todo/i });
    fireEvent.click(submitButton);

    expect(onAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      label: 'New Todo',
      completed: false,
    });
  });

  it('should close the modal on cancel', () => {
    const onAddTodo = vi.fn();
    const onClose = vi.fn();

    render(<AddTodoModal onClose={onClose} onAddTodo={onAddTodo} />);

    const cancelButton = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(cancelButton);

    expect(onClose).toHaveBeenCalled();
  });
});

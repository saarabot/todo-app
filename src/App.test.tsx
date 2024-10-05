import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Todo App', () => {
  it('should display empty state and open modal when no todos exist', () => {
    render(<App />);

    // Check that the empty state is displayed
    expect(screen.getByText(/All tasks completed/i)).toBeInTheDocument();

    // Open modal
    const addButton = screen.getByRole('button', { name: /Add New Todo/i });
    fireEvent.click(addButton);

    // Check that modal opens
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByLabelText(/Todo label/i)).toBeInTheDocument();
  });

  it('should add a new todo item', () => {
    render(<App />);

    // Open modal
    const addButton = screen.getByRole('button', { name: /Add New Todo/i });
    fireEvent.click(addButton);

    // Enter new todo
    const input = screen.getByLabelText(/Todo label/i);
    fireEvent.change(input, { target: { value: 'Added Todo' } });

    // Submit new todo
    const submitButton = screen.getByRole('button', { name: /Add todo/i });
    fireEvent.click(submitButton);

    // Check that new todo appears
    expect(screen.getByText(/Added Todo/i)).toBeInTheDocument();
  });
});

import React, { useState } from 'react';
import { TodoItem } from '../../types';

interface AddTodoModalProps {
  onClose: () => void;
  onAddTodo: (todo: TodoItem) => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({ onClose, onAddTodo }) => {
  const [label, setLabel] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleAddTodo = () => {
    if (label.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(), // Unique ID based on timestamp
        label,
        completed,
      };
      onAddTodo(newTodo);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 id="modal-title" className="text-xl font-bold mb-4">
          Add New Todo
        </h2>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter todo label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          aria-label="Todo label"
        />
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            className="mr-2"
            aria-label="Mark as completed"
          />
          Mark as completed
        </label>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2 focus:outline-none focus:ring focus:ring-gray-300"
            onClick={onClose}
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
            onClick={handleAddTodo}
            aria-label="Add todo"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;

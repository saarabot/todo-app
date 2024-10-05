import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import { TodoItem } from '../types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
    setIsModalOpen(false); // Close modal after adding todo
  };

  const removeTodo = (todo: TodoItem) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  const toggleTodoStatus = (todo: TodoItem) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <main className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodoStatus={toggleTodoStatus}
        />

        {todos.length === 0 && (
          <div className="flex flex-col items-center mt-8 text-center">
            <div
              role="img"
              aria-label="checkmark"
              className="text-6xl text-green-500"
            >
              ✔
            </div>
            <p className="text-lg mt-2">All tasks completed!</p>
          </div>
        )}
      </main>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Todo
      </button>
      {isModalOpen && (
        <AddTodoModal
          onClose={() => setIsModalOpen(false)}
          onAddTodo={addTodo}
        />
      )}
    </div>
  );
};

export default App;

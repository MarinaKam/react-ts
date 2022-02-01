import { FC, useEffect, useState } from 'react';
// import { Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './models/todo.model';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((state) => [...state, { id: Math.random().toString(), text }]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((state) => state.filter((item) => item.id !== todoId));
  };

  useEffect(() => {
    setTodos([{ id: 't1', text: 'Finish the course' }]);
  }, []);

  return (
    <div className="App">
      <AddTodo onAdd={addTodo} />
      <TodoList items={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;

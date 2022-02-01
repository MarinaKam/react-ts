import { FC, FormEvent, useRef } from 'react';

import './AddTodo.css';

type AddTodoProps = {
  onAdd: (text: string) => void;
};

const AddTodo: FC<AddTodoProps> = ({ onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAdd(inputRef.current!.value);
    inputRef.current!.value = '';
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input ref={inputRef} type="text" id="todo-text" />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;

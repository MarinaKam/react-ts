import { FC } from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: string, text: string }[];
  onDelete: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>
            {item.text}
          </span>

          <button onClick={onDelete.bind(null, item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

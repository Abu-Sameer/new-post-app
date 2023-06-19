import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos } from '../features/TodoSlice';
import TodoCart from './TodoCart';

export default function TodoList() {
  const AllItems = useSelector(selectAllTodos);
  return (
    <div className="mt-3">
      <h2>Todo List</h2>

      <table className="table">
        <thead>
          <tr>
            <th className="th">Items</th>
            <th className="th">Quantity</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {AllItems.map((items) => (
            <TodoCart key={items.id} items={items} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

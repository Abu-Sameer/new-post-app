import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddTodo,
  selectAmountOfItems,
  selectQuantityOfAllItems,
} from '../features/TodoSlice';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const AmountOfItems = useSelector(selectAmountOfItems);
  const QuantityOfAllItems = useSelector(selectQuantityOfAllItems);
  const dispatch = useDispatch();

  function addTodos() {
    dispatch(AddTodo(todo));
    setTodo('');
  }
  return (
    <div>
      <h1>Shopping Cart App</h1>
      <h4>AMOUNT OF ITEMS SELECTED {AmountOfItems}</h4>
      <h4>QUANTITY OF ALL ITEMS SELECTED {QuantityOfAllItems}</h4>

      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control"
          name="todo"
          onChange={(e) => setTodo(e.target.value)}
          autoComplete="off"
          value={todo}
          style={{ width: '20rem' }}
        />
        <button onClick={addTodos} className="btn btn-primary ms-3">
          Add
        </button>
      </div>
    </div>
  );
}

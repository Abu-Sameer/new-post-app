import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseCount,
  increaseCount,
  removeTodo,
} from '../features/TodoSlice';
import EditTodo from './EditTodo';

export default function TodoCart({ items }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {edit ? (
        <EditTodo setEdit={setEdit} />
      ) : (
        <>
          {items.itemsTodo ? (
            <>
              <tr>
                <td>{items.itemsTodo}</td>
                <td
                  className={
                    items.TodosCount < 1
                      ? ' bg-warning fs-3'
                      : 'bg-primary fs-3 text-light'
                  }
                >
                  {items.TodosCount}
                </td>
                <td>
                  <button
                    onClick={() => dispatch(increaseCount())}
                    className="btn btn-outline-primary px-2 py-1"
                  >
                    +
                  </button>
                  <button
                    disabled={items.TodosCount < 1}
                    onClick={() => dispatch(decreaseCount())}
                    className="btn btn-outline-dark px-2 py-1 mx-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(items.id))}
                    className="btn btn-outline-danger p-1"
                  >
                    Delete
                  </button>
                  <button className="btn btn-outline-success p-1 mx-2">
                    Save
                  </button>
                  <button
                    onClick={() => setEdit(true)}
                    className="btn btn-outline-info p-1"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </>
          ) : (
            <h1>Empty</h1>
          )}
        </>
      )}
    </>
  );
}

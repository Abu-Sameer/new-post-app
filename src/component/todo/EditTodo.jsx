import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/TodoSlice';

export default function EditTodo({ setEdit }) {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  //   const todoEdi = useSelector(selectTodoById);

  function saveTodos() {
    if (cansave) {
      dispatch(
        updateTodo({
          todo,
          //  id: todoEdi.id,
          //  TodosCount: todoEdi.TodosCount,
        })
      );
      setTodo('');
    }
  }

  const cansave = [todo].every(Boolean);
  return (
    <div>
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
        <button onClick={saveTodos} className="btn btn-primary ms-3">
          Save
        </button>
        <button onClick={() => setEdit(false)} className="btn btn-dark ms-3">
          Cancel
        </button>
      </div>
    </div>
  );
}

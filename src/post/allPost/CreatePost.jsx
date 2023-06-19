import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddPost } from '../feature/PostSlice';
import { selectAllUsers } from '../feature/Users';
import { NavLink, useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const navigate = useNavigate();

  const cansave = [title, content].every(Boolean);

  function pushPost() {
    if (cansave) {
      dispatch(AddPost(title, content, userId));
    }
    setTitle('');
    setContent('');
    setUserId('');
    navigate('/');
  }

  return (
    <div className="container form-control w-50 my-4">
      <div className="text-start d-flex text-justify flex-column justify-content-center">
        <h1 className="text-center">New Post</h1>
        <div className="col">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col">
          <label>Users</label>
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="form-control text-center"
          >
            <option>...Select Author...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label>Content</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <button
        disabled={!cansave}
        onClick={pushPost}
        className="btn btn-primary my-3"
      >
        Save
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, selectPostById, updatePost } from '../feature/PostSlice';
import { selectAllUsers } from '../feature/Users';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditSave() {
  const { editId } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const post = useSelector((state) => selectPostById(state, editId));
  const navigate = useNavigate();

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [userId, setUserId] = useState(post?.userId);

  function saveEdit() {
    dispatch(
      updatePost({
        title,
        userId,
        content,
        id: post.id,
        reactions: post.reactions,
      })
    );

    setTitle('');
    setContent('');
    navigate(`/editpost/${editId}`);
  }

  function deletePost(post) {
    dispatch(removePost(post.id));
    setTitle('');
    setContent('');
    setUserId('');
    navigate('/');
  }

  return (
    <div className="container form-control w-50 my-4">
      <div className="text-start d-flex text-justify flex-column justify-content-center">
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
      <button onClick={saveEdit} className="btn btn-primary my-3">
        Save
      </button>
      <button onClick={deletePost} className="btn btn-danger my-3 mx-3">
        Delete
      </button>
    </div>
  );
}

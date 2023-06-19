import React from 'react';
import ReactionButton from './ReactionButton';
import Author from './Author';
import { useSelector } from 'react-redux';
import { selectPostById } from '../feature/PostSlice';
import TimeAgo from './TimeAgo';
import { Link, useParams } from 'react-router-dom';

export default function EditPost() {
  const { editId } = useParams();
  const post = useSelector((state) => selectPostById(state, editId));

  return (
    <div className="container-fluid d-flex justify-content-center text-start">
      <div className="col-md-4 mt-4">
        <div className="card h-100">
          <div className="card-body">
            <h3>{post.title}</h3>
            <div className="card-text">{post.content}</div>
            <div>
              <TimeAgo time={post.date} />
              <Link className="me-2" to={`/editpost/editsave/${post.id}`}>
                Edit Post
              </Link>
              <Author userId={post.userId} />
            </div>
            <ReactionButton post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}

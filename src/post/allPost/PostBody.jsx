import React from 'react';
import ReactionButton from './ReactionButton';
import Author from './Author';
import TimeAgo from './TimeAgo';
import { Link } from 'react-router-dom';

export default function PostBody({ post }) {
  return (
    <div className="col-md-4 my-2">
      <div className="card h-100">
        <div className="card-body">
          <h3>{post.title}</h3>
          <div className="card-text">{post.content.substring(0, 75)}...</div>
          <div>
            <TimeAgo time={post.date} />
            <Link to={`editpost/${post.id}`}>View post </Link>
            <Author userId={post.userId} />
          </div>
          <ReactionButton post={post} />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from '../feature/PostSlice';
import PostBody from './PostBody';
import { Link } from 'react-router-dom';

export default function Post() {
  const posts = useSelector(selectAllPost);

  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="container-fluid">
      <h1>Post List</h1>
      <div className="row my-4 text-start">
        {orderedPost.map((post) => (
          <PostBody key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

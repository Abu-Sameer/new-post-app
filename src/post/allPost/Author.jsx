import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../feature/Users';

export default function Author({ userId }) {
  const allAuthor = useSelector(selectAllUsers);
  const Author = allAuthor.find((user) => user.id === userId);
  return (
    <span>
      by:{' '}
      <span className="fw-bold">{Author ? Author.name : 'Unknown Author'}</span>
    </span>
  );
}

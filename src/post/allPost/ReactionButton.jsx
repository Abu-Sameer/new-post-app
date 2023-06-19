import React from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from '../feature/PostSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  perfect: '👌',
  coffee: '☕️',
};

export default function ReactionButton({ post }) {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            key={name}
            className="btn btn-outline-dark border-0 mx-1 px-1"
            onClick={() =>
              dispatch(addReaction({ postId: post.id, reaction: name }))
            }
          >
            {emoji}
            {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
}

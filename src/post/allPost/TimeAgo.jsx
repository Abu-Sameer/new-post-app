import { parseISO, formatDistanceToNow } from 'date-fns';

import React from 'react';

export default function TimeAgo({ time }) {
  let timeAgo = '';
  if (time) {
    const date = parseISO(time);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = timePeriod;
  }
  return (
    <div title={time}>
      <span>time: {timeAgo} ago</span>
    </div>
  );
}

import React, { useState } from 'react';
import Comments from '../../../../components/comments/Comments';

const CommentSection = ({ type, typeId }) => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return <Comments type={type} typeId={typeId} onAddComment={addComment} comments={comments} />;
};

export { CommentSection };

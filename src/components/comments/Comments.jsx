import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { KeenIcon } from '@/components/keenicons/KeenIcons';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const Comments = ({ type, typeId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/comment`, {
          params: { type, typeId },
        });
        setComments(response.data?.data || []);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [type, typeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/comment/add-comments`,
        {
          Comment: commentText,
          Type: type,
          TypeId: typeId,
        }
      );

      if (response.data && response.data.data) {
        setComments((prevComments) => [response.data.data, ...prevComments]);
        setCommentText('');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${API_BASE_URL}/comment/${commentId}`);
      setComments(prevComments => prevComments.filter(comment => comment._id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEditClick = (comment) => {
    setEditingCommentId(comment._id);
    setEditText(comment.Comment);
  };

  const handleUpdateComment = async (commentId) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/comment/${commentId}`, {
        Comment: editText
      });

      if (response.data && response.data.data) {
        setComments(prevComments => 
          prevComments.map(comment => 
            comment._id === commentId ? response.data.data : comment
          )
        );
        setEditingCommentId(null);
        setEditText('');
      }
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  return (
    <div className="card overflow-hidden">
      <div className="card-header border-b border-gray-200 py-6">
        <h3 className="card-title text-gray-900 font-medium">
          Recent Comments ({comments.length})
        </h3>
      </div>
      <div className="card-body p-10">
        <div className="flex flex-col gap-8">
          {comments.map((comment) => (
            <div key={comment._id} className="border-b border-gray-200 pb-6">
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-900">
                  {comment?.CreatedBy?.FullName || 'Unknown'}
                </span>
              </div>
              {editingCommentId === comment._id ? (
                <div className="mb-3">
                  <Textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="min-h-[80px] break-all whitespace-pre-wrap overflow-hidden max-w-full"
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setEditingCommentId(null)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => handleUpdateComment(comment._id)}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-800 mb-3 break-all whitespace-pre-wrap overflow-hidden max-w-full">
                  {comment.Comment}
                </p>
              )}
              <div className="flex items-center justify-between">
                <time className="text-xs text-gray-600">
                  {new Date(comment.createdAt).toLocaleDateString()} {' '}
                  {new Date(comment.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </time>
                <div className="flex gap-2">
                  {!editingCommentId && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEditClick(comment)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <KeenIcon icon="pencil" className="mr-1" />
                      Edit
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteComment(comment._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <KeenIcon icon="trash" className="mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <Textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment here..."
            disabled={loading}
            className="min-h-[120px] break-all whitespace-pre-wrap overflow-hidden max-w-full"
          />
          <div className="flex justify-end mt-4">
            <Button 
              type="submit"
              variant="default"
              size="default"
              disabled={loading}
            >
              {loading ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;

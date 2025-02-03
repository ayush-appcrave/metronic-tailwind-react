import { Alert } from '@/components/Alert';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const Comments = ({ type, typeId }) => {
  const [alert, setAlert] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);

  const showAlert = (message, type = 'primary') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const validationSchema = Yup.object({
    Comment: Yup.string()
      .required('Comment is required')
      .min(1, 'Comment cannot be empty')
      .max(1000, 'Comment must not exceed 1000 characters'),
  });

  const formik = useFormik({
    initialValues: {
      Comment: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/comment/add-comments`, {
          Comment: values.Comment,
          Type: type,
          TypeId: typeId,
        });

        if (response.data && response.data.data) {
          setComments((prevComments) => [response.data.data, ...prevComments]);
          resetForm();
          showAlert('Comment added successfully', 'success');
        }
      } catch (error) {
        showAlert(error.response?.data?.message || 'Failed to add comment', 'danger');
      } finally {
        setLoading(false);
      }
    },
  });

  const editFormik = useFormik({
    initialValues: {
      Comment: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.put(`${API_BASE_URL}/comment/${editingCommentId}`, {
          Comment: values.Comment,
        });

        if (response.data && response.data.data) {
          setComments((prevComments) =>
            prevComments.map((comment) =>
              comment._id === editingCommentId ? response.data.data : comment
            )
          );
          setEditingCommentId(null);
          showAlert('Comment updated successfully', 'success');
        }
      } catch (error) {
        showAlert(error.response?.data?.message || 'Failed to update comment', 'danger');
      }
    },
  });

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

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${API_BASE_URL}/comment/${commentId}`);
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
      showAlert('Comment deleted successfully', 'success');
    } catch (error) {
      showAlert(error.response?.data?.message || 'Failed to delete comment', 'danger');
    }
  };

  const handleEditClick = (comment) => {
    setEditingCommentId(comment._id);
    editFormik.setValues({ Comment: comment.Comment });
  };

  return (
    <div className="card overflow-hidden">
      <div className="card-header border-b border-gray-200 py-6">
        <h3 className="card-title text-gray-900 font-medium">
          Recent Comments ({comments.length})
        </h3>
      </div>
      <div className="card-body p-10">
        {alert && <Alert variant={alert.type}>{alert.message}</Alert>}

        <div className="flex flex-col gap-8 comment-height">
          {comments.map((comment) => (
            <div key={comment._id} className="border-b border-gray-200 pb-6">
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-900">
                  {comment?.CreatedBy?.FullName || 'Unknown'}
                </span>
                <br/>
                <time className="text-xs text-gray-600">
                  {new Date(comment.createdAt).toLocaleDateString()}{' '}
                  {new Date(comment.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </time>
              </div>
              {editingCommentId === comment._id ? (
                <div className="mb-3">
                  <Textarea
                    {...editFormik.getFieldProps('Comment')}
                    className="min-h-[80px] whitespace-pre-wrap overflow-hidden max-w-full"
                  />
                  {editFormik.touched.Comment && editFormik.errors.Comment && (
                    <div className="text-red-500 text-sm mt-1">{editFormik.errors.Comment}</div>
                  )}
                  <div className="flex justify-end gap-2 mt-2">
                    <Button variant="outline" size="sm" onClick={() => setEditingCommentId(null)}>
                      Cancel
                    </Button>
                    <Button variant="default" size="sm" onClick={editFormik.handleSubmit}>
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-800 mb-3 whitespace-pre-wrap overflow-hidden max-w-full">
                  {comment.Comment}
                </p>
              )}
              <div className="flex items-center justify-between">
                {/* Edit comment and delete comment buttons */}

                {/* <div className="flex gap-2">
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
                </div> */}
              </div>
            </div>
          ))}
          {comments.length ? null : <span>No Comments Found</span>}
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-8">
          <Textarea
            {...formik.getFieldProps('Comment')}
            placeholder="Write your comment here..."
            disabled={loading}
            className="min-h-[120px] break-all whitespace-pre-wrap overflow-hidden max-w-full"
          />
          {formik.touched.Comment && formik.errors.Comment && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.Comment}</div>
          )}
          <div className="flex justify-end mt-4">
            <Button type="submit" variant="default" size="default" disabled={loading}>
              {loading ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;

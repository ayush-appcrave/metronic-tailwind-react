import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const Comments = ({ type, typeId }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/comment`, {
                    params: { type, typeId },
                });
                setComments(response.data?.data || []);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchComments();
    }, [type, typeId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/comment/add-comments`,
                {
                    Comment: commentText,
                    Type: type,
                    TypeId: typeId,
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            if (response.data && response.data.data) {
                setComments((prevComments) => [response.data.data, ...prevComments]);
                setCommentText("");
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="card">
                <div className="card-header border-b border-gray-200 py-6">
                    <h3 className="card-title text-gray-900 font-medium">Recent Comments ({comments.length})</h3>
                </div>
                <div className="flex flex-col gap-8 comment-height">
                    <div className="card">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <div key={comment._id}>
                                    <div className="items-center mb-2 p-3 pb-0">
                                        <a href="#" className="text-md font-medium text-gray-900 hover:text-primary-active mb-1">
                                            {comment?.CreatedBy?.FullName || "Unknown"}
                                        </a>
                                        <div className="unitRight">
                                            <time className="text-xs text-gray-600">
                                            {comment?.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "N/A"} {comment?.createdAt ? new Date(comment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : ""}
                                            </time>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-800 leading-5.5 mb-5 px-3 mt-5">{comment?.Comment || "No text available"}</p>
                                    <hr />
                                </div>
                            ))
                        ) : (
                            <div className="items-center mb-2 p-3 pb-0">
                                <p className="text-center text-gray-600">No comments yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="items-center">
                <br />
                <div className="input flex w-full input-lg height-80">
                    <textarea
                        type="text"
                        placeholder="Your comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="w-full border-none focus:ring-0 focus:outline-none height-80-p"
                        disabled={loading}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Comments;

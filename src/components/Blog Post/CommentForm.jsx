import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, isAuthenticated }) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setMessage('Comment cannot be empty');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`/api/comments/${postId}`, { content: comment });
      setComment('');
      setMessage('Comment posted successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to post comment. Please try again.');
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div id="CommentForm_1" className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-600 text-center">Please login to leave a comment</p>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
          Login to Comment
        </button>
      </div>
    );
  }

  return (
    <form id="CommentForm_2" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="space-y-4">
        <textarea
          id="CommentForm_3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y transition duration-200 ease-in-out"
          style={{ maxHeight: '300px' }}
        />
        {message && (
          <div id="CommentForm_4" className={`p-3 rounded-md ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-1'}`}
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
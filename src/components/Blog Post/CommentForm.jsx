import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim() || !email.trim()) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`/api/comments/${postId}`, {
        content: comment,
        name,
        email
      });
      setComment('');
      setName('');
      setEmail('');
      setError('');
      if (onCommentSubmit) onCommentSubmit();
    } catch (err) {
      setError('Failed to submit comment. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div id="CommentForm_1" className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h3 id="CommentForm_2" className="text-2xl font-semibold mb-6 text-gray-800">Leave a Comment</h3>
      {error && (
        <div id="CommentForm_3" className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div id="CommentForm_4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name*
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Your name"
          />
        </div>
        <div id="CommentForm_5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="your@email.com"
          />
        </div>
        <div id="CommentForm_6">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comment*
          </label>
          <textarea
            id="comment"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Write your comment here..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
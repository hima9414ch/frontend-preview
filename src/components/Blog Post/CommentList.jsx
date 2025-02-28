import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/comments/${postId}`);
        setComments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  const sortComments = (commentsArray) => {
    switch (sortBy) {
      case 'newest':
        return [...commentsArray].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return [...commentsArray].sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return commentsArray;
    }
  };

  if (isLoading) {
    return (
      <div id="CommentList_1" className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="CommentList_2" className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Comments ({comments.length})</h2>
        <select
          id="CommentList_3"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div id="CommentList_4" className="space-y-4">
        {sortComments(comments).map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100"
          >
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                {comment.author[0].toUpperCase()}
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">{comment.author}</h3>
                <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">{comment.content}</p>
            <div className="mt-3 flex items-center space-x-4">
              <button className="text-gray-500 hover:text-blue-500 flex items-center space-x-1 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>{comment.likes || 0}</span>
              </button>
              <button className="text-gray-500 hover:text-blue-500 text-sm">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
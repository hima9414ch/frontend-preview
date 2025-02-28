import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleEdit = async (commentId) => {
    if (editingId === commentId) {
      try {
        await axios.put(`/api/comments/${commentId}`, { text: editText });
        setEditingId(null);
        setEditText('');
        fetchComments();
      } catch (error) {
        console.error('Error updating comment:', error);
      }
    } else {
      const comment = comments.find(c => c.id === commentId);
      setEditText(comment.text);
      setEditingId(commentId);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`/api/comments/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div id="CommentList_1" className="max-w-3xl mx-auto mt-8 space-y-6 p-4">
      {comments.map(comment => (
        <div
          key={comment.id}
          id={`CommentList_${comment.id}`}
          className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                {comment.author[0]}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{comment.author}</h3>
                <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(comment.id)}
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                {editingId === comment.id ? 'Save' : 'Edit'}
              </button>
              <button
                onClick={() => handleDelete(comment.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
          {editingId === comment.id ? (
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
            />
          ) : (
            <p className="text-gray-700 leading-relaxed">{comment.text}</p>
          )}
          <div className="mt-4 flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span>{comment.likes || 0}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span>Reply</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
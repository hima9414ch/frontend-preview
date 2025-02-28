import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PostListItem = ({ post, onDelete, onEdit }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/posts/${post.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        onDelete(post.id);
        toast.success('Post deleted successfully');
      } else {
        throw new Error('Failed to delete post');
      }
    } catch (error) {
      toast.error('Error deleting post');
    }
  };

  return (
    <div id="PostListItem_1" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 mb-4 border border-gray-100">
      <div id="PostListItem_2" className="flex justify-between items-start">
        <div id="PostListItem_3" className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-2 mb-3">
            {post.content}
          </p>
          <div id="PostListItem_4" className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <div id="PostListItem_5" className="flex gap-2">
          <button
            onClick={() => onEdit(post)}
            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => setShowConfirmation(true)}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div id="PostListItem_6" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete();
                  setShowConfirmation(false);
                }}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostListItem;
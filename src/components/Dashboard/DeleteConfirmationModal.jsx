import React, { useState } from 'react';
import axios from 'axios';

const DeleteConfirmationModal = ({ isOpen, onClose, postId, onDeleteSuccess }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      setError(null);
      await axios.delete(`/api/posts/${postId}`);
      onDeleteSuccess();
      onClose();
    } catch (err) {
      setError('Failed to delete post. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="DeleteConfirmationModal_1" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div id="DeleteConfirmationModal_2" className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all shadow-xl">
        <div id="DeleteConfirmationModal_3" className="text-center">
          <div id="DeleteConfirmationModal_4" className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 id="DeleteConfirmationModal_5" className="text-xl font-semibold text-gray-900 mb-2">Delete Post</h3>
          <p id="DeleteConfirmationModal_6" className="text-gray-500 mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
          {error && (
            <p id="DeleteConfirmationModal_7" className="text-red-500 mb-4">{error}</p>
          )}
          <div id="DeleteConfirmationModal_8" className="flex justify-center space-x-4">
            <button
              id="DeleteConfirmationModal_9"
              onClick={onClose}
              disabled={isDeleting}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              id="DeleteConfirmationModal_10"
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isDeleting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deleting...
                </>
              ) : 'Delete Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
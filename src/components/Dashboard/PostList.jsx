import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editFormData, setEditFormData] = useState({ title: '', content: '' });

  const userId = '123'; // Replace with actual user ID from auth

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/posts/${userId}`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`/api/posts/${selectedPost.id}`, editFormData);
      setIsEditing(false);
      fetchPosts();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${selectedPost.id}`);
      setIsDeleting(false);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div id="PostList_1" className="p-6 max-w-6xl mx-auto">
      <h2 id="PostList_2" className="text-3xl font-bold text-gray-800 mb-6">Your Posts</h2>
      
      <div id="PostList_3" className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div id="PostList_4" className="overflow-x-auto">
          <table id="PostList_5" className="w-full">
            <thead id="PostList_6" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <tr id="PostList_7">
                <th id="PostList_8" className="px-6 py-4 text-left">Title</th>
                <th id="PostList_9" className="px-6 py-4 text-left">Published Date</th>
                <th id="PostList_10" className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody id="PostList_11">
              {posts.map((post) => (
                <tr id="PostList_12" key={post.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td id="PostList_13" className="px-6 py-4 font-medium text-gray-900">{post.title}</td>
                  <td id="PostList_14" className="px-6 py-4 text-gray-600">
                    {new Date(post.publishedDate).toLocaleDateString()}
                  </td>
                  <td id="PostList_15" className="px-6 py-4">
                    <button
                      id="PostList_16"
                      onClick={() => {
                        setSelectedPost(post);
                        setEditFormData(post);
                        setIsEditing(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 mr-4 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      id="PostList_17"
                      onClick={() => {
                        setSelectedPost(post);
                        setIsDeleting(true);
                      }}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div id="PostList_18" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div id="PostList_19" className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 id="PostList_20" className="text-2xl font-bold mb-4">Edit Post</h3>
            <input
              id="PostList_21"
              type="text"
              value={editFormData.title}
              onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
              className="w-full p-2 border rounded mb-4"
              placeholder="Post Title"
            />
            <textarea
              id="PostList_22"
              value={editFormData.content}
              onChange={(e) => setEditFormData({ ...editFormData, content: e.target.value })}
              className="w-full p-2 border rounded mb-4 h-32"
              placeholder="Post Content"
            />
            <div id="PostList_23" className="flex justify-end gap-4">
              <button
                id="PostList_24"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                id="PostList_25"
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleting && (
        <div id="PostList_26" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div id="PostList_27" className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 id="PostList_28" className="text-2xl font-bold mb-4">Confirm Delete</h3>
            <p id="PostList_29" className="text-gray-600 mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
            <div id="PostList_30" className="flex justify-end gap-4">
              <button
                id="PostList_31"
                onClick={() => setIsDeleting(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                id="PostList_32"
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
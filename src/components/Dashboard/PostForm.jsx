import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ existingPost, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (existingPost) {
      setFormData({
        title: existingPost.title || '',
        content: existingPost.content || '',
        category: existingPost.category || ''
      });
    }
  }, [existingPost]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const url = existingPost
        ? `/api/posts/${existingPost.id}`
        : '/api/posts';
      const method = existingPost ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');
      const data = await response.json();
      onSubmit(data);
      if (!existingPost) setFormData({ title: '', content: '', category: '' });
    } catch (error) {
      setErrors({ submit: 'Failed to submit post. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg" id="PostForm_1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6" id="PostForm_2">
        {existingPost ? 'Edit Post' : 'Create New Post'}
      </h2>

      <div className="space-y-2" id="PostForm_3">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Enter post title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="space-y-2" id="PostForm_4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter post category (optional)"
        />
      </div>

      <div className="space-y-2" id="PostForm_5">
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <ReactQuill
          value={formData.content}
          onChange={(content) => setFormData({ ...formData, content })}
          className={`bg-white ${errors.content ? 'border-red-500' : ''}`}
          theme="snow"
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ],
          }}
        />
        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
      </div>

      {errors.submit && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md" id="PostForm_6">
          {errors.submit}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 ease-in-out hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        id="PostForm_7"
      >
        {isSubmitting ? 'Submitting...' : existingPost ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;
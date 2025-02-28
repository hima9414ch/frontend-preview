import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const BlogPostDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${window.location.pathname.split('/').pop()}`);
        if (!response.ok) throw new Error('Post not found');
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (loading) return (
    <div id="BlogPostDetail_1" className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div id="BlogPostDetail_2" className="flex justify-center items-center min-h-screen text-red-500">
      {error}
    </div>
  );

  return (
    <article id="BlogPostDetail_3" className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={post?.imageUrl || images[0]} 
            alt={post?.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span id="BlogPostDetail_4" className="inline-block px-4 py-1 rounded-full bg-blue-500 text-white text-sm font-semibold mb-4">
              {post?.category || 'Technology'}
            </span>
            <h1 id="BlogPostDetail_5" className="text-4xl font-bold text-white mb-2">
              {post?.title || 'The Future of Web Development'}
            </h1>
            <div id="BlogPostDetail_6" className="flex items-center space-x-4 text-white">
              <img 
                src={post?.author?.avatar || images[1]} 
                alt="Author" 
                className="w-10 h-10 rounded-full"
              />
              <span>{post?.author?.name || 'John Doe'}</span>
              <span>•</span>
              <span>{post?.publishedDate || 'June 1, 2023'}</span>
            </div>
          </div>
        </div>

        <div id="BlogPostDetail_7" className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed">
              {post?.content || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
            </p>
          </div>
        </div>

        <div id="BlogPostDetail_8" className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
              Share
            </button>
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300">
              Save
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Reading time:</span>
            <span className="font-semibold">{post?.readingTime || '5 min'}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
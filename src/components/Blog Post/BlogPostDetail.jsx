import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import images from '../assets/images';

const BlogPostDetail = () => {
  const [post, setPost] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${userId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [userId]);

  if (!post) return (
    <div id="BlogPostDetail_1" className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  return (
    <div id="BlogPostDetail_2" className="max-w-4xl mx-auto px-4 py-8">
      <div id="BlogPostDetail_3" className="bg-white rounded-lg shadow-2xl overflow-hidden">
        <div id="BlogPostDetail_4" className="relative h-96">
          <img 
            src={images[0]} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 id="BlogPostDetail_5" className="text-4xl font-bold text-white mb-2">{post.title}</h1>
            <div id="BlogPostDetail_6" className="flex items-center space-x-4">
              <img 
                src={images[1]} 
                alt={post.author}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span className="text-white">{post.author}</span>
              <span className="text-gray-300">{new Date(post.publishedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div id="BlogPostDetail_7" className="p-8">
          <div id="BlogPostDetail_8" className="flex gap-2 mb-6">
            {post.categories?.map((category, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>

          <div id="BlogPostDetail_9" className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>

          <div id="BlogPostDetail_10" className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div id="BlogPostDetail_11" className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{post.likes} Likes</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{post.comments?.length || 0} Comments</span>
                </button>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Share Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
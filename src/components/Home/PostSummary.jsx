import React from 'react';
import images from '../assets/images';

const PostSummary = ({ post = {
  id: 1,
  title: 'Understanding Modern Web Development',
  excerpt: 'Dive deep into the latest trends and technologies shaping the future of web development. From React to Next.js, explore the tools that are revolutionizing how we build for the web.',
  author: 'John Doe',
  date: '2024-01-15',
  readTime: '5 min read',
  imageUrl: images[0] || 'https://source.unsplash.com/random/800x600/?coding'
} }) => {
  return (
    <div id="PostSummary_1" className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-6 border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative overflow-hidden">
          <img 
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center space-x-4 mb-3">
            <span id="PostSummary_2" className="text-sm text-gray-500">{post.date}</span>
            <span id="PostSummary_3" className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h2 id="PostSummary_4" className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
          <p id="PostSummary_5" className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div id="PostSummary_6" className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <span id="PostSummary_7" className="text-sm text-gray-700">{post.author}</span>
            </div>
            <button 
              id="PostSummary_8"
              className="px-4 py-2 text-sm font-semibold text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 rounded-full transition-all duration-300"
              onClick={() => window.location.href = `/post/${post.id}`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
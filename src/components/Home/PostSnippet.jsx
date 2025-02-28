import React from 'react';
import images from '../assets/images';

const PostSnippet = ({ post = {
  id: 1,
  title: 'The Art of Modern Web Development',
  summary: 'Explore the latest trends and best practices in modern web development. From responsive design to progressive web apps, discover how to build better web experiences.',
  image: images[0] || 'https://source.unsplash.com/random/800x600/?coding',
  date: '2024-01-15',
  author: 'John Doe',
  readTime: '5 min read'
} }) => {
  return (
    <article id="PostSnippet_1" className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
      <div className="relative">
        <img
          id="PostSnippet_2"
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div id="PostSnippet_3" className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {post.readTime}
        </div>
      </div>
      
      <div className="p-6">
        <div id="PostSnippet_4" className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        
        <h2 id="PostSnippet_5" className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        
        <p id="PostSnippet_6" className="text-gray-600 mb-4 line-clamp-3">
          {post.summary}
        </p>
        
        <div id="PostSnippet_7" className="flex items-center text-blue-500 font-semibold">
          Read More
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default PostSnippet;
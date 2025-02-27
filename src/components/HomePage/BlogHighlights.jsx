import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const BlogHighlights = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('api/blogs/highlights')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(() => {
        // Fallback data if API fails
        setBlogs([
          {
            id: 1,
            title: 'The Future of Web Development',
            excerpt: 'Exploring emerging trends in modern web development and what lies ahead.',
            author: 'John Smith',
            date: '2024-01-15',
            readTime: '5 min read',
            category: 'Technology'
          },
          {
            id: 2,
            title: 'Mastering React Hooks',
            excerpt: 'A comprehensive guide to using React Hooks effectively in your applications.',
            author: 'Sarah Johnson',
            date: '2024-01-12',
            readTime: '8 min read',
            category: 'Programming'
          },
          {
            id: 3,
            title: 'UI/UX Best Practices',
            excerpt: 'Essential principles for creating user-friendly and visually appealing interfaces.',
            author: 'Mike Wilson',
            date: '2024-01-10',
            readTime: '6 min read',
            category: 'Design'
          }
        ]);
      });
  }, []);

  return (
    <div id="BlogHighlights_1" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="BlogHighlights_2" className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Blog Posts</h2>
        <div id="BlogHighlights_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              id={`BlogHighlights_${index + 4}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={images[index % images.length]}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHighlights;
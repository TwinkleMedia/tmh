// src/components/BlogList.js
import React from 'react';
import blogs from './blogs';

const BlogList = ({ onSelectBlog }) => {
  
  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Blog List</h2>
      <ul className="list-group">
        {blogs.map(blog => (
          <li key={blog.id} className="list-group-item">
            <a href="#" className="text-decoration-none" onClick={() => onSelectBlog(blog)}>
              {blog.title} - {blog.author}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

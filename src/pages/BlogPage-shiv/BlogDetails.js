// src/components/BlogDetails.js
import React from 'react';

const BlogDetails = ({ blog }) => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-3">{blog.title}</h2>
      <p><strong>Author:</strong> {blog.author}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;

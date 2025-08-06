// src/App.js
import React, { useState } from 'react';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import blogs from './blogs';

const BlogPg = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div>
      <h1>Interactive Blog Page</h1>
      <div className="container">
        <div className="left-panel">
          <BlogList onSelectBlog={handleSelectBlog} />
        </div>
        <div className="right-panel">
          {selectedBlog ? <BlogDetails blog={selectedBlog} /> : <p>Please select a blog to read.</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogPg;

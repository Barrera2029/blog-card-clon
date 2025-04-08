import React from 'react';
import logo from "../assets/illustration-article.svg";
import avatar from "../assets/image-avatar.webp";
import "../styles/main.scss";

export const BlogCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={logo} alt="HTML & CSS Illustration" className="card-image"  />
        <div className="card-content">
          <span className="category">Learning</span>
          <p className="date">Published 21 Dec 2023</p>
          <h2 className="title">HTML & CSS foundations</h2>
          <p className="description">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
          <div className="author">
            <img src={avatar} alt="Greg Hooper" className="avatar" />
            <span className="name">Greg Hooper</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
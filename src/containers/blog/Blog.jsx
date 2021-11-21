import React from "react";
import { Article } from "../../components";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
};

export default Blog;

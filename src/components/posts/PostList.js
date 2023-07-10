import React from "react";
import "../assets/css/Post.css";

const PostList = (props) => {
  const { posts } = props.data;
  console.log("data", posts);
  return (
    <div className="post-list">
      {posts?.map((post) => {
        const { id, title, body } = post;

        return (
          <div key={id} className="post">
            <h3 className="post-title">{title}</h3>
            <p className="post-body">{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

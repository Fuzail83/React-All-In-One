import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/slices/postSlice";
import PostList from "./PostList";

const ManagePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts", posts);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <h2>Post</h2>

      <PostList data={posts} />
    </div>
  );
};

export default ManagePost;

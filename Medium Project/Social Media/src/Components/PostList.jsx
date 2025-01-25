import React from "react";
import Posts from "./Posts";
import { usePosts } from "../Context/post-list-store";
import Welcomemsg from "./Welcomemsg";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const { postList } = usePosts();

  // const postList = useLoaderData();

  return (
    <>
      {postList.length == 0 && <Welcomemsg />}
      {postList?.map((posts) => (
        <Posts key={posts.id} post={posts} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};

export default PostList;

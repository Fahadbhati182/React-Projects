import React from "react";
import { usePosts } from "../Context/post-list-store";
import { AiFillDelete } from "react-icons/ai";

const Posts = ({ post }) => {
  const { deletePosts } = usePosts();
  return (
    <div className="card post-card" style={{ width: "40rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            onClick={() => deletePosts(post.id)}
            className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text ">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className=" my-tags badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Posts;

import { Children, createContext, useContext, useId, useReducer } from "react";

const PostListContext = createContext({
  postList: [],
  addPosts: () => {},
  deletePosts: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (cuurPostList, action) => {
  let newPosts = cuurPostList;
  if (action.type == "DELETE_POST") {
    newPosts = cuurPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type == "ADD_POST") {
    newPosts = [action.payload, ...cuurPostList];
  }
  return newPosts;
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostLists] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPosts = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostLists({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePosts = (postId) => {
    dispatchPostLists({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider value={{ postList, addPosts, deletePosts }}>
      {children}
    </PostListContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostListContext);
};

export default PostListProvider;

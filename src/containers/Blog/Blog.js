import React from "react";
import PostGrid from "../../components/PostGrid";
import Loader from "../../components/Loader";

const Blog = ({ posts, loading, error }) => {
  return (
    <div>
      {error && <div>Something Went Wrong!!</div>}
      {loading ? (
        <Loader></Loader>
      ) : (
        posts.map(post => <PostGrid key={post.id} post={post}></PostGrid>)
      )}
    </div>
  );
};

export default Blog;

import React from "react";
import { Link } from "react-router-dom";
// import getExcerpt from "../../utils/excerpt";

const PostGrid = ({ post }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Link to={`/posts/${post.id}/${post.slug}`}>
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </Link>
      {/* <p>{getExcerpt(post.content.rendered, 150)}</p> */}
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
    </div>
  );
};

export default PostGrid;

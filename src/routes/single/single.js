import React, { useState, useEffect } from "react";
import api from "../../Api";
import Loader from "../../components/Loader";

const Single = ({ match }) => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await api.get(`wp/v2/posts/${match.params.id}`);
        setPost(post.data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [match.params.id]);

  const { title, content } = post;
  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <React.Fragment>
          <h2
            style={{ fontWeight: "bold" }}
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
          <hr></hr>
          <p style={{ fontWeight: "bold" }}>
            Posted on : {new Date(post.date).toLocaleString()}
          </p>
          <hr></hr>
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Single;

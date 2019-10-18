import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Api from "../../Api";
import Blog from "../../containers/Blog";

const Home = props => {
  const [posts, setPosts] = useState([]);
  const [activePage, setActivePage] = useState(
    props.match.params.activepage || 1
  );
  const [totatPosts, setTotatPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const params = {
    per_page: 10
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await Api.get(
          `wp/v2/posts?per_page=${params.per_page}&page=${props.match.params
            .activepage || activePage}`
        );
        setPosts(posts.data);
        setTotatPosts(posts.headers["x-wp-total"]);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, [activePage, props.match.params.activepage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    props.history.push(`/page/${pageNumber}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Blog posts={posts} error={isError} loading={isLoading}></Blog>
      {!isLoading && (
        <div>
          <Pagination
            activePage={parseInt(activePage)}
            itemsCountPerPage={params.per_page}
            totalItemsCount={totatPosts}
            pageRangeDisplayed={8}
            innerClass="pagination justify-content-center"
            itemClass="page-item"
            linkClass="page-link"
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Home;

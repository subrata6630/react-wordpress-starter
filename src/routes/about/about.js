import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="position-relative overflow-hidden text-center">
        <div className="col-md-8 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Wordpress Blog</h1>
          <p className="lead font-weight-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <hr />
          <p>Created by ♥ Sabuj Ali</p>
        </div>
        <button type="button" className="btn btn-outline-info">
          <a
            href="https://github.com/prosabuj/react-wordpress-starter"
            target="__blank"
          >
            Project Source
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;

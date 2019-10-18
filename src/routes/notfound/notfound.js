import React from "react";
import { ReactComponent as Icon } from "./404.svg";

const NotFound = () => {
  return (
    <div className="container">
      <div className="position-relative overflow-hidden text-center">
        <div className="col-md-8 p-lg-5 mx-auto">
          <h1 className="display-4 font-weight-normal">Not Found!</h1>
          <Icon></Icon>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./containers/Layout";

import Home from "./routes/home";
import About from "./routes/about";
import Single from "./routes/single";
import NotFound from "./routes/notfound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/page/:activepage" component={Home}></Route>
          <Route exact path="/posts/:id/:slug" component={Single}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

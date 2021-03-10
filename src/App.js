import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mapper from "./pages/Mapper";
import Header from "./components/header/Header";
import PostItForm from "./components/post-it-form/PostItForm"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/mapper"
          component={Mapper}
        />
        <Route exact path="/postitform" component={PostItForm} />
      </Switch>
    </>
  );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import BaseMapContainer from "./components/base-map-container/BaseMapContainer";
import Homepage from "./pages/Hompage";
import Mapper from "./pages/Mapper";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact patch="/mapper" component={Mapper}/>
      </Switch>

    <BaseMapContainer/>
    </>

  );
}

export default App;

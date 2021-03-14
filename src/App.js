import React from "react";
import { Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mapper from "./pages/Mapper";
import Header from "./components/header/Header";
import PostItForm from "./components/post-it-form/PostItForm"
import NotesContainer from "./components/notes-container/NotesContainer";

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
        <Route exact path="/notescontainer" component={NotesContainer}/>
      </Switch>
    </>
  );
};

export default App;

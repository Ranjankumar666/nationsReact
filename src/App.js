import React from "react";
import Home from "./containers/Home";
import {Route, Switch, withRouter} from "react-router-dom";
import NationDetail from "./containers/Nation-Detail.js";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact render= {() => <Home region="/all" />} />
      <Route path="/asia" exact render= {() =><Home region="asia" />} />
      <Route path="/americas" exact render= {() =><Home region="americas" />} />
      <Route path="/oceania" exact render= {() =><Home region="oceania" />} />
      <Route path="/africa" exact render= {() =><Home region="africa" />} />
      <Route path="/europe" exact render= {() =><Home region="europe" />} />
      <Route path="/country/:params" exact component={NationDetail} />
    </Switch>
    </div>
  );
}



export default withRouter(App);

import React,{lazy, Suspense} from "react";
import Home from "./containers/Home";
import Spinner from "./components/UI/spinner/spinner";
import {Route, Switch, withRouter} from "react-router-dom";
import "./App.css";

const NationDetail = lazy(() => import("./containers/Nation-Detail.js"));

function App() {
  return (
    <div className="App">
    <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path="/" exact render= {() => <Home region="/all" />} />
      <Route path="/asia" exact render= {() =><Home region="asia" />} />
      <Route path="/americas" exact render= {() =><Home region="americas" />} />
      <Route path="/oceania" exact render= {() =><Home region="oceania" />} />
      <Route path="/africa" exact render= {() =><Home region="africa" />} />
      <Route path="/europe" exact render= {() =><Home region="europe" />} />
      <Route path="/country/:params" exact component={NationDetail} />
    </Switch>
    </Suspense>
    </div>
  );
}



export default withRouter(App);

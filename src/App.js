import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Post from "./components/Post";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

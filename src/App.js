import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/parts/Home";
import Item from "./pages/parts/Item";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
   * {
     padding: 0
   }

   a {
     text-decoration: none;
   }

body {
  padding: 0;
  margin: 0;
  background: #F5F7FA;
}
`;

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/item">
            <Item />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
          404 not Font!
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

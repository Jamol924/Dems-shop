import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/parts/Home";
import Item from "./pages/parts/Item";
import Contact from "./pages/parts/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Busines from "./pages/sections/categore/Busines";
import Elictronic from "./pages/sections/categore/Elictronc";
import Education from "./pages/sections/categore/Education";
import Automobile from "./pages/sections/categore/Automobile";
import Properti from "./pages/sections/categore/Properti";

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
          <Route  path="/busines"  component={Busines} />
          <Route  path="/education"  component={Elictronic} />
          <Route  path="/elictronic"  component={Education} />
          <Route  path="/properti"  component={Automobile} />
          <Route  path="/automobile"  component={Properti} />
          <Route  path="/contact"  component={Contact} />
          <Route  path="/:productId"  component={Item} />
          <Route  path="/" exact component={Home} />
          <Route>404 Not Found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

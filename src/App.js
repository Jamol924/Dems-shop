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
import Admin from "./pages/parts/Admen";
import TovarCars from "./pages/sections/Admen/TovarCategore/Cars";
import TovarHome from "./pages/sections/Admen/TovarCategore/Home";
import TovarElectronics from "./pages/sections/Admen/TovarCategore/Electronics";
import TovarJobs from "./pages/sections/Admen/TovarCategore/Jobs";
import TovarFashionStyle from "./pages/sections/Admen/TovarCategore/FashionStyle";
import TovarChildrensWorld from "./pages/sections/Admen/TovarCategore/ChildrensWorld";
import TovarbusinesService from "./pages/sections/Admen/TovarCategore/businesService";
import TovarAgriculture from "./pages/sections/Admen/TovarCategore/Agriculture";
import { SnackbarProvider } from "notistack";

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
    <SnackbarProvider>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Switch>
            <Route exact path="/admen/Cars" render={() => <TovarCars category="cars" />} />
            <Route exact path="/admen/Home" component={TovarHome} />
            <Route
              exact
              path="/admen/Electronics"
              component={TovarElectronics}
            />
            <Route exact path="/admen/Jobs" component={TovarJobs} />
            <Route
              exact
              path="/admen/FashionStyle"
              component={TovarFashionStyle}
            />
            <Route
              exact
              path="/admen/ChildrensWorld"
              component={TovarChildrensWorld}
            />
            <Route
              exact
              path="/admen/business-service"
              component={TovarbusinesService}
            />
            <Route
              exact
              path="/admen/Agriculture"
              component={TovarAgriculture}
            />

            <Route exact path="/admen" component={Admin} />
            <Route exact path="/busines" component={Busines} />
            <Route exact path="/education" component={Elictronic} />
            <Route exact path="/elictronic" component={Education} />
            <Route exact path="/properti" component={Automobile} />
            <Route exact path="/automobile" component={Properti} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/:productId" component={Item} />
            <Route exact path="/" component={Home} />
            <Route>404 Not Found</Route>
          </Switch>
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/parts/Home";
import Item from "./pages/parts/Item";
import Contact from "./pages/parts/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Busines from "./pages/sections/categore/BusinesCard/Busines";
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
import Cars from "./pages/sections/categore/Cars/Cars";
import Plaze from "./pages/sections/categore/Home/Home";
import fashion from "./pages/sections/categore/Fashion/fashion";
import Electronics from "./pages/sections/categore/Elictron/Elictronc";
import ChildrenWorld from "./pages/sections/categore/ChildWer/ChildrenWorld";
import BusinesStyle from "./pages/sections/categore/BusinesCard/Busines";
import Agrikulture from "./pages/sections/categore/Agriculture/Agrikulture";
import Jobs from "./pages/sections/categore/Jobs/Jobs";

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

            <Route exact path="/Cars" component={Cars} />
            <Route exact path="/Home" component={Plaze} />
            <Route exact path="/FashionStyle" component={fashion} />
            <Route exact path="/Electronics" component={Electronics} />
            <Route exact path="/ChildrensWorld" component={ChildrenWorld} />
            <Route exact path="/business-service" component={BusinesStyle} />
            <Route exact path="/Agriculture" component={Agrikulture} />
            <Route exact path="/Jobs" component={Jobs} />

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

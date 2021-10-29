import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/parts/Home";
import Item from "./pages/parts/Item";
import Contact from "./pages/parts/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import AllAds from "./pages/parts/AllAds";
import SearchCard from "./pages/sections/SearchProduct/SearchCard";
import MyProfil from "./pages/parts/MyProfil";
import Setting from "./pages/sections/MyProfil/Setting";
import MyAdss from "./pages/sections/MyProfil/MyAdss";

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
            <Route
              exact
              path="/admen/Cars"
              render={() => <TovarCars category="cars" />}
            />
            <Route
              exact
              path="/admen/Home"
              render={() => <TovarHome category="home" />}
            />
            <Route
              exact
              path="/admen/Electronics"
              render={() => <TovarElectronics category="electronics" />}
            />
            <Route
              exact
              path="/admen/Jobs"
              render={() => <TovarJobs category="jobs" />}
            />
            <Route
              exact
              path="/admen/fashion-style"
              render={() => <TovarFashionStyle category="fashion-style" />}
            />
            <Route
              exact
              path="/admen/childrens-world"
              render={() => <TovarChildrensWorld category="childrens-world" />}
            />
            <Route
              exact
              path="/admen/business-service"
              render={() => <TovarbusinesService category="business-service" />}
            />
            <Route
              exact
              path="/admen/Agriculture"
              render={() => <TovarAgriculture categore="agriculture" />}
            />
            <Route exact path="/admen" component={Admin} />

            <Route exact path="/Cars" component={Cars} />
            <Route exact path="/Home" component={Plaze} />
            <Route exact path="/Fashion-Style" component={fashion} />
            <Route exact path="/Electronics" component={Electronics} />
            <Route exact path="/Childrens-World" component={ChildrenWorld} />
            <Route exact path="/business-service" component={BusinesStyle} />
            <Route exact path="/Agriculture" component={Agrikulture} />
            <Route exact path="/Jobs" component={Jobs} />

            <Route exact path="/My-adds" component={MyAdss} />
            <Route exact path="/admenName" component={Setting} />
            <Route exact path="/myProfil" component={MyProfil} />
            <Route exact path="/SearchCard" component={SearchCard} />
            <Route exact path="/AllAds" component={AllAds} />
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

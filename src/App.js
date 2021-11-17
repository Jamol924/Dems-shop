import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/parts/Home";
import Item from "./pages/parts/Item";
import ItemCard from "./pages/sections/Admen/TovarById/GlavneId";
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
import okFilse from "./components/common/okFile";
import FailFooter from "./components/FailFooter.jsx";
import "animate.css";

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
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarCars category="cars" />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/admen/Home"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarHome category="home" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen/Electronics"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarElectronics category="electronics" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen/Jobs"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarJobs category="jobs" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen/fashion-style"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarFashionStyle category="fashion-style" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen/childrens-world"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarChildrensWorld category="childrens-world" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen/business-service"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarbusinesService category="business-service" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen/Agriculture"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <TovarAgriculture categore="agriculture" />
                </div>
              )}
            />
            <Route
              exact
              path="/admen"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Admin />
                </div>
              )}
            />
            <Route exact path="/okFilse" component={okFilse} />

            <Route
              exact
              path="/Cars"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Cars />
                </div>
              )}
            />
            <Route
              exact
              path="/Home"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Plaze />{" "}
                </div>
              )}
            />
            <Route exact path="/Fashion-Style" component={fashion} />
            <Route
              exact
              path="/Electronics"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Electronics />
                </div>
              )}
            />
            <Route
              exact
              path="/Childrens-World"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <ChildrenWorld />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/business-service"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <BusinesStyle />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/Agriculture"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Agrikulture />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/Jobs"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Jobs />{" "}
                </div>
              )}
            />

            <Route
              exact
              path="/My-adds"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <MyAdss />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/admenName"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Setting />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/myProfil"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <MyProfil />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/SearchCard"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <SearchCard />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/AllAds"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <AllAds />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Contact />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/failFooter"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <FailFooter />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/:productId"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <Item />{" "}
                </div>
              )}
            />
            <Route
              exact
              path="/card/:productId"
              render={() => (
                <div className="animate__animated animate__fadeIn">
                  <ItemCard />{" "}
                </div>
              )}
            />
            <Route exact path="/" component={Home} />
            <Route>404 Not Found</Route>
          </Switch>
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
import React from "react";
import Header from "./components/Header/index";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Porfolio";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter,Route,Switch } from "react-router-dom";


function App (){
  return (
        <>
        <BrowserRouter basename="/react-portfolio">
        <Header />
        <Switch>
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
        </BrowserRouter>
        </>
  );
}
export default App;



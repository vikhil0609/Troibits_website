
import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Services from './pages/services'
import HomePage from './pages/home'
import Header from './components/Header'
import Contact from "./components/ContactPart/contact";
import Work from "./components/workpart/work";
import Company from "./components/company/company";
import './index.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from "./components/HomePart/Footer";
import "./App.css"


ReactDOM.render(
  <div>
    <BrowserRouter>
        <div className="main-wrap d-flex">
            <Switch>
              <Route exact path="/" >
                <div>
                <HomePage />
                </div>
              </Route>
              <Route exact path="/home">
                <div> 
                <HomePage />
                </div>
              </Route>
              <Route exact path="/services" >
                <div>
                  <Header />
                <Services />
                </div>
              </Route>
              <Route exact path="/work">
              <div>
                <Header />
                <Work />
              <div className="Main-footer">
              <Footer />
              </div>
                </div>
              </Route>
              <Route exact path="/contact">
              <div>
                  <Header />
                  <Contact />
                <div className="Main-footer">
                <Footer />
                </div>
              </div>
              </Route>
              <Route  exact path="/company">
              <div><Header />
              <Company />
              <div className="Main-footer">
              <Footer />
              </div>
              </div>
              </Route>
            </Switch>
          </div> 
    </BrowserRouter>
  </div>
    ,
  document.getElementById("root")
);

registerServiceWorker();
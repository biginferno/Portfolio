import React, {Component} from "react";

import {Switch, Route} from 'react-router-dom';

import Landingpage from "./landingpage";
import About from "./aboutme";
import Resume from "./resume";
import Contact from "./contact";
import Project from "./projects";

const Main = () => (
    <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/project" component={Project} />
            <Route path="/resume" component={Resume} />
    </Switch>

);

//We are exporting a react element, not a component this will correlate
//to {Main} and not <Main/>
export default Main;
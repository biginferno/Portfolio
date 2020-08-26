import React, {Component} from "react";

import {Switch, Route} from 'react-router-dom';

import Landingpage from "./landingpage/landingpage";
import About from "./aboutme";
import Resume from "./resume/resume";
import Contact from "./contact";
import Project from "./projects";

// const Main = () => (
//     <Switch>
//         <Route exact path="/" component={Landingpage} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/project" component={Project} />
//         <Route path="/resume" component={Resume} />
//     </Switch>

// );
const Main = () => {
    return(
        <div id="main">
            <div id="landingpage">
                <Landingpage/>
            </div>
            <div id="resume">
                <Resume />
            </div>
            <div id="project">
                <Project/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    )
};

//We are exporting a react element, not a component this will correlate
//to {Main} and not <Main/>
export default Main;
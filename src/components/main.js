import React from "react";

import {Switch, Route} from "react-mdl/lib/Switch";

import Landingpage from "./landingpage";
import About from "./aboutme";
import Resume from "./resume";
import Contact from "./contact";
import Project from "./projects";

const Main = () => (
    <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/aboutme" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Project} />
            <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;
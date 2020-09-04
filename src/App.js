import React, {Component} from 'react';
import './Stylings/App.css';

import Landingpage from "./components/landingpage/landingpage";
import Resume from "./components/resume/resume";
import Project from "./components/projects";
import Navbar from "./components/navbar"


class App extends Component{
  render(){
    return (
        <div className="app">
          <Navbar/>
          <Landingpage id="landingpage"/>
          <Resume id="resume"/>
          <Project id="project"/>
        </div>  
    );
  }
}

export default App;

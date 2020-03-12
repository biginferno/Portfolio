import React, {Component} from 'react';
import logo from './logo.svg';
import './Stylings/App.css';
import Main from "./components/main";

import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import {Link} from "react-router-dom";


function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>

            <Navigation>

              <Link className="header-right" to="/resume">Resume</Link>
              <Link className="header-right" to="/about">About</Link>
              <Link className="header-right" to="/project">Projects</Link>
              <Link className="header-right" to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Navigation">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />

            <Main/>

          </Content>

        </Layout>
      </div>

    </div>
  );
}

export default App;

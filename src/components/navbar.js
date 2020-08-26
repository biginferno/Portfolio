import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
            <Link 
                className="nav-logo"
                onClick={this.scrollToTop}>
                Coding Inferno
            </Link>
          <ul className="nav-items">
                <li className="nav-item">
                  <Link 
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}>
                      Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}>
                      
                      Projects
                  </Link>
                </li>
          </ul>
        </div>
      </nav>
    );
  }
}
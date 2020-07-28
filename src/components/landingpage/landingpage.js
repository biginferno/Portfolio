import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import AboutMe from "./about";
import Social from "./sociallinks"
class Landingpage extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt="avatar"
                            className="avatar-img"/>
                            <div className="banner-text">
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>HTML/CSS | Java | MongoDB | NodeJS | Javascript | React</p>
                                <Social/>

                            </div>


                        </Cell>

                </Grid>

                <div className="landing-grid-about">
                    <AboutMe/>
                </div>
            </div>


        )
    }
}

export default Landingpage;
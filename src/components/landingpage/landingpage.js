import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import AboutMe from "./about";
import Social from "./sociallinks"
import profile_pic from "./Profile.jpg"
class Landingpage extends Component {
    render() {
        
        return(
            <div style={{width:'100%', height:'100%', margin:'auto'}}>
                <Grid className="landing-grid" noSpacing="true">
                    <Cell col={12}>
                        <img
                            src={profile_pic}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>HTML5/CSS | ReactJS | AngularJS | Express | MongoDB | NodeJS | Java/C++ </p>
                            <Social/>

                        </div>


                    </Cell>

                </Grid>

                <div className="landing-grid-about" >
                    <AboutMe/>
                </div>
            </div>


        )
    }
}

export default Landingpage;
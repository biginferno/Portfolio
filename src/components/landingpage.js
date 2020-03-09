import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
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
                            <div className="social-links">
                                {/*This will create a linkedin icon that will bring the user to a new webpage at linkedin*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*Github*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*Other*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*Other*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            </div>
                            </div>
                        </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landingpage;
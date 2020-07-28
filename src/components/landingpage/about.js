import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <Grid>
                <Cell col={6}>
                    <div className="landing-grid-about-text">
                        <h1>About Me</h1>
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                        <p>
                            College graduate of Sonoma State University. 
                        </p>
                    </div>
                </Cell>
                <Cell col={6}>
                    <div className="landing-grid-about-text">
                        <h1>Objective</h1>
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                        <p>
                            To enhance, my current abilities as a Software Engineer
                        </p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default AboutMe;

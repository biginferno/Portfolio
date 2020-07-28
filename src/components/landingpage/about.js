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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </Cell>
                <Cell col={6}>
                    <div className="landing-grid-about-text">
                        <h1>About Me</h1>
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default AboutMe;
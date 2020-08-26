import React, {Component} from "react";

class Social extends Component {
    render() {
        return (
            <div className="social-links">
                {/*This will create a linkedin icon that will bring the user to a new webpage at linkedin*/}
                <a href="https://www.linkedin.com/in/ryan-romero-58a30b1a3/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                {/*Github*/}
                <a href="https://github.com/biginferno" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"/>
                </a>
                {/*Other*/}
                <a href="https://twitter.com/Coding_Inferno" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"/>
                </a>
                {/*Other*/}
                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                </a> */}
            </div>
        )
    }
}


export default Social;
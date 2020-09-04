import React,{Component} from "react";
import {Grid, Cell} from "react-mdl";

class Experience extends Component {
    render() {
        const jobDetails = this.props.jobDescription.map((item)=>{
            return (
                <li>
                    {item}
                </li>
            )
        });
        return (
            <Grid>
                <Cell col={4}>{this.props.startYear } - {this.props.endYear}</Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: "0px"}}>{this.props.businessName}</h4>
                    <ul>{jobDetails}</ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
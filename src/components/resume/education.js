import React,{Component} from "react";
import {Grid, Cell} from "react-mdl";

class Education extends Component {
    render() {
        const schoolDetails = this.props.schoolDescription.map((item)=>{
            return (
                <li>
                    {item}
                </li>
            )
        });
        return (
            <div>
                <Grid>
                    <Cell col={4}>{this.props.startYear } - {this.props.endYear}</Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: "0px"}}>{this.props.schoolName}</h4>
                        <ul>{schoolDetails}</ul>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;
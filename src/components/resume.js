import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl'
import Education from './education'
class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:"center"}}>
                            <img
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                alt="avatar"
                                style={{height: "200px"}}
                            />

                        </div>
                        <h2 style={{paddingTop:"2em"}}>Ryan Romero</h2>
                        <h4 style={{color:"grey"}}> Programmer</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "75%"}}/>
                        <p>Paragraph text</p>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                        <h5>Address</h5>
                        <p>1 Menlo Way, 94052 </p>
                        <h5> Phone</h5>
                        <p>9258185555</p>
                        <h5>Email</h5>
                        <p>romeroryan01@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education startYear={2013} endYear={2015} schoolName={"Cuesta College"} schoolDescription={"This is Cuesta College"}/>
                        <Education startYear={2018} endYear={2020} schoolName={"Sonoma State University"} schoolDescription={"This is SSU"}/>
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
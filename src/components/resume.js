import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
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
                        <h2>Experience</h2>
                        <Experience startYear={2010} endYear={2013} businessName={"Green Fleet Maintenance Manager"}
                                    jobDescription={"Contra Costa Centre Association in Walnut Creek, CA, August 2011-August 2013\n" +
                                    "Cleaned and maintained four separate green fleet buildings\n" +
                                    "Serviced Smart Cars and Nissan Leafs, Maintained a fleet of electric bicycles and Segways\n"}/>
                        <Experience startYear={2019} endYear={2020} businessName={"IT Consultant"}
                                    jobDescription={"Consultant for faculty, staff and students\n" +
                                    "Responsible for account management of enterprise "}/>
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                        <h2>Skills</h2>
                        <Skills skill={"Javascript"} progress={100}/>
                        <Skills skill={"Java"} progress={75}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
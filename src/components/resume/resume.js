import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
import '../../Stylings/App.css'
class Resume extends Component {
    render() {
        return(
            <div className="resume-body" id={this.props.id}>
                <Grid>
                    <Cell col={4} className="personal-info">
                        <div style={{textAlign:"center"}}>
                            <img
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                alt="avatar"
                                style={{height: "200px"}}
                            />

                        </div>
                        <h2 style={{paddingTop:"2em"}}>Ryan Romero</h2>
                        <h4 style={{color:"black"}}> Full Stack Developer</h4>
                        {/* <hr style={{borderTop: "3px solid #833fb2", width: "75%"}}/>
                        <p>Paragraph text</p> */}
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                        <h5> Phone</h5>
                        <p>9258183716</p>
                        <h5>Email</h5>
                        <p>romeroryan01@gmail.com</p>
                        <h5>Website</h5>
                        <a href="biginferno.github.io/Portfolio" alt="Portfolio Link" style={{}}>Ryan's Portfolio</a>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education 
                            startYear={"January 2018"} 
                            endYear={"May 2020"} 
                            schoolName={"Sonoma State University"} 
                            schoolDescription={[
                                ["Bachelor of Science Degree in Computer Science"], 
                                ["GPA: 3.5"], 
                                ["Dean’s List, Spring Semester 2018"],
                                [ "Tau Sigma Honors Society"]]}
                        />
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                        <h2>Experience</h2>
                        {/* <Experience startYear={2010} endYear={2013} businessName={"Green Fleet Maintenance Manager"}
                                    jobDescription={[]}/> */}
                        <Experience 
                            startYear={"January 2019"} 
                            endYear={"October 2019"} 
                            businessName={"IT Consultant"}
                            jobDescription={[
                            [`First point of contact for campus wide technology needs`],
                            [`Technical troubleshooting`],
                            [`Account provisioning`],
                            [`Media support`],
                            [`Hardware installation`]]}
                        />
                        <hr style={{borderTop: "3px solid #e22947"}}/>
                        <h2>Skill Level</h2>
                        
                        <Skills skill={"Javascript"} progress={90}/>
                        <Skills skill={"Java"} progress={75}/>
                        <Skills skill={"C++"} progress={70}/>
                        <Skills skill={"ReactJS"} progress={65}/>
                        <Skills skill={"HTML"} progress={60}/>
                        <Skills skill={"CSS"} progress={50}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
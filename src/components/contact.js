import React, {Component} from "react";
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';

export default class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ryan Romero</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height:"200px"}}
                        />
                        <p style={{width:"75%", margin:"auto", paddingTop:"1em", fontSize: "20px", fontFamily:"Oxygen"}}> This is info about contacting Ryan</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        123 456 789
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        romeroryan01@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        SkypeID
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                        <i className="fa fa-github" aria-hidden="true"/>
                                        Github
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}
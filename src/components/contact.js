import React, {Component} from "react";
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';

class Contact extends Component {
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
                        <p style={{width:"75%", margin:"auto", paddingTop:"1em"}}> This is info about contacting Ryan</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontsize: "25px", fontFamily: "Anton"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        123 456 789
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="person">Aaron Paul</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Contact;
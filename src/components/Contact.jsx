import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery , useTheme, AppBar, Toolbar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import locationIcon from '../assets/location2.svg';
import { useState } from 'react';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    textContainer1 : {
        color : "white",
        fontSize : "3rem",
        [theme.breakpoints.down("sm")] : {
            alignItems : "center",
            marginTop : "2rem",
            fontSize : "1.5rem",
        }
    },
    textContainer2 : {
        color : "white",
        textAlign : "center",
        [theme.breakpoints.down("sm")] : {
            alignItems : "center",
            fontSize : "3rem",
            marginTop : "1rem",
            textAlign : "center",
            marginBottom : "2rem"
        }
    },
    textContainer3 : {
        color : "white",
        fontSize : "1.2rem",
        [theme.breakpoints.down("sm")] : {
            fontSize : "1.4rem",
           // marginTop : "1rem",
            marginBottom : "-1rem",
      
            textAlign : "center"
        }
    },
    gridItem : {
        marginBottom : "1rem"
    },
    message : {
        border: `2px solid ${theme.palette.common.gold}`,
        marginTop : "5em",
        borderRadius : 5
    },
    sendButton : {
        borderRadius : 10,
        height : 45 ,
        width : 245 ,
        fontSize : "1rem" ,
        color : "white" ,
        backgroundColor : theme.palette.common.gold,
        "&:hover" : {
            backgroundColor : "white",
            color : theme.palette.common.gold
        }
    }
}))

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [message , setMessage] = useState("");

    return (
        <React.Fragment>
            <Grid container direction="column" alignItems="center" style={{backgroundColor : "red"}}>

                <Grid item container direction="column" alignItems="center" justify="center">
                    <Grid item >
                        <Typography variant="body1" className={classes.textContainer1}>
                            Feel free to contact me anytime
                        </Typography>
                    </Grid>
                    <Grid item >
                    <Typography variant="h2" className={classes.textContainer2}>
                            Get In Touch
                    </Typography>
                    </Grid>
                </Grid>


                <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop : matchesSM ? 0 : "3rem"}}>
                    <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined} 
                    justify="center" md style={{marginLeft : matchesSM ? 0 :  "2rem"}}>
                        <Grid item className={classes.gridItem}>    
                        <Typography variant="h3" className={classes.textContainer2} >
                            Contact Info
                        </Typography>
                        </Grid>

                        <Grid item className={classes.gridItem}>
                        <Typography variant="body1" className={classes.textContainer3}>
                            Always available for freelance work if the right project
                            comes along. feel free to contact me !
                        </Typography>
                        </Grid>

                        <Grid item container direction={matchesSM ? "column" : "row"} className={classes.gridItem} >
                            <Grid item >
                                
                                <img alt="location" src={emailIcon} 
                                style={{marginRight : "1em" ,
                                        marginLeft : matchesSM ? "50%" : 0 ,
                                        verticalAlign : "bottom"}} />
                                
                            </Grid>

                            <Grid item >
                                <Typography variant="body1" className={classes.textContainer3}>
                                apoorva.jakati@gmail.com
                            </Typography>
                            </Grid>
                        
                        </Grid>

                        <Grid item container direction={matchesSM ? "column" : "row"} className={classes.gridItem} justify="flex-start">
                            <Grid item >
                                
                                <img alt="phone" src={phoneIcon} style={{marginRight : "1em" , marginLeft : matchesSM ? "50%" : 0}}/>
                                
                            </Grid>

                            <Grid item >
                                <Typography variant="body1" className={classes.textContainer3}>
                                +91 8892510285
                            </Typography>
                            </Grid>
                        
                        </Grid>
                    </Grid>

                    <Grid item container justify="center" alignItems="center" direction="column" md style={{ marginTop : matchesSM ? "3rem" : undefined}}>
                        <Grid item>
                            <Grid container direction="column" >
                            <Grid item>
                        <Typography variant="h3" className={classes.textContainer2}>
                            Mail me
                        </Typography>
                        </Grid>

                        <Grid item container direction="column" style={{maxWidth : "20em"}}>
                            <Grid item style={{marginBottom : "0.5em"}}>
                            <TextField label="Name" id="name" fullWidth value={name} 
                            onChange={event => setName(event.target.value)}/>
                            </Grid>

                            <Grid item style={{marginBottom : "0.5em"}}>
                            <TextField label="Email" id="email" fullWidth value={email}
                            onChange={event => setEmail(event.target.value)}/>
                            </Grid>

                            <Grid item style={{marginBottom : "0.5em"}}>
                            <TextField label="Phone" id="phone" fullWidth value={phone}
                            onChange={event => setPhone(event.target.value)}/>
                            </Grid>
                        </Grid>

                        <Grid item style={{maxWidth : "20em"}}>
                            <TextField rows={6} multiline id="name" value={message} 
                            className={classes.message}
                            fullWidth
                            InputProps={{disableUnderline : true}}
                            onChange={event => setMessage(event.target.value)}/>
                        </Grid>

                        <Grid item container justify="center" style={{marginTop : "2em" , marginBottom : "2em"}}>
                            <Button variant="contained" className={classes.sendButton}>Send Message</Button>
                        </Grid>
                            </Grid>
                        </Grid>

                        
                        
                    </Grid>

                </Grid>


            </Grid>
        </React.Fragment>
    )
}
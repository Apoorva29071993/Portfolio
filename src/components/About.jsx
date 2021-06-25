import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import apoorva from '../assets/apoorva2.jpg';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import react from '../assets/react1.svg';
import redux from '../assets/redux.svg';
import Paper from '@material-ui/core/Paper';
import Skills from '../components/Skills';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import revolutionBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles(theme => ({
    apoorva : {
        height: "15em",
        width: "15em",
        marginTop : "2rem",
        marginBottom : "2rem",
        marginLeft : "2rem",
        [theme.breakpoints.down("sm")]: {
          height: "10em",
          width: "10em",
          maxHeight: 300,
          maxWidth: 300,
          marginTop : "3rem",
          marginBottom : "0rem",
          marginleft : "2rem"
        },
        [theme.breakpoints.down("xs")]: {
            height: "10em",
            width: "10em",
            maxHeight: 300,
            maxWidth: 300,
            marginRight : "2rem",
            marginTop : "0.5em"
          }
    } ,
    mainContainer: {
        backgroundColor : "black"
    },
    info : {
        color : "white",
        maxWidth : "55em",
        marginLeft : "2em"
    },
    bodyContent : {
        textAlign : "left"
    },
    iconBlock : {
        marginRight : "30rem"
    },
    wordpress : {
     marginRight : "3rem"
    },
    heading : {
        color : "white" ,
        [theme.breakpoints.down("xs")] : {
            textAlign : "center"
          }
    },
    icon : {
        marginLeft : "2em",
        height : '5em',
        width : "5em",
        borderRadius : "4em",
        [theme.breakpoints.down("xs")] : {
            marginRight : 0
        }
    },
    card : {
        backgroundColor : theme.palette.common.gross,
        boxShadow : theme.shadows[10],
        borderRadius : 0 ,
        padding : "1em",
        [theme.breakpoints.down("sm")] : {
            paddingTop : "3em" ,
            paddingBottom : "3em",
            paddingLeft : 0,
            paddingRight : 0,
            //borderRadius : "25%",
            width : "100%"
        }
    },
    summary : {
        borderRadius : "50%",
        backgroundColor : theme.palette.common.gold,
        marginTop : "2em"
    },
    paper : {
        marginTop : "3rem",
        marginLeft : '3rem',
        marginRight : '3rem' ,
        backgroundImage: `url(${revolutionBackground})`,
        [theme.breakpoints.down("sm")]: {
            backgroundColor : "lightblue"
        }
    },
    firstCard : {
        marginTop : "3rem",
        marginLeft : "2rem",
        marginBottom : "3rem",
        marginRight : "2rem"
    },
    secondCard : {
        marginRight : "5rem"
    },
    summaryPaper : {
        marginTop : "3rem",
        backgroundColor : theme.palette.common.gross
    },
    summaryCard : {
        marginTop : "3rem",
        marginLeft : "10rem",
        marginBottom : "3rem",
        marginRight : "3rem"
    },
    summaryApoorva : {
        height: "15em",
        width: "15em",
        marginTop : "2rem",
        marginBottom : "2rem",
        marginLeft : "2rem",
        [theme.breakpoints.down("sm")]: {
          height: "10em",
          width: "10em",
          maxHeight: 300,
          maxWidth: 300,
          marginTop : "3rem",
          marginBottom : "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            height: "10em",
            width: "10em",
            maxHeight: 300,
            maxWidth: 300,
            marginRight : "9rem",
            marginTop : "0.5em"
          }
    },
    educationText : {
        color : "white" , 
        [theme.breakpoints.down("sm")]:{
            textAlign : "center"
        }
    },
    skillsPaper : {
        marginTop : "3rem",
        marginLeft : '3rem',
        marginRight : '3rem' ,
        backgroundImage: `url(${revolutionBackground})`,
        
    }
}))

export default function About(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <Grid container direction="column" alignItems="center" className={classes.mainContainer}>
                
                <Grid item>
                    <Typography variant="h2" style={{ fontSize : matchesSM ? "4rem" : undefined  , marginTop : matchesSM ? "4rem" : undefined}}>
                        About Myself
                    </Typography>
                </Grid>

            <Grid item>
            <Paper elevation={24} className={classes.paper} square="true">
                <Grid container justify={matchesSM ? "center" : "space-between"} alignItems="center" >

                <Grid item  justify="center" >
                    <Avatar alt="apoorva" variant="circle" src={apoorva} className={classes.apoorva}/>
                </Grid>


                    <Grid item className={classes.firstCard}>
                        <Grid container direction="column" >
                            <Grid item style={{marginBottom : "2em"}}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                        <Grid item >
                                        <Typography variant="h6" className={classes.educationText}>
                                        <span style={{color : "white"}}> Name : </span> Mr.Apoorva A. Jakati
                                        </Typography>
                                        <Typography variant="h6" className={classes.educationText}>
                                            <span style={{color : "white"}}> DOB :  </span> 29/07/1993
                                        </Typography>
                                        <Typography variant="h6" className={classes.educationText}>
                                            <span style={{color : "white"}}> Phone :  </span> +91 8892510285
                                        </Typography>
                                        <Typography variant="h6" className={classes.educationText}>
                                            <span style={{color : "white"}}>  Email : </span> apoorva.jakati@gmail.com
                                        </Typography>
                                        <Typography variant="h6" className={classes.educationText}>
                                            <span style={{color : "white"}}>  Languages : </span> English , Kannada
                                        </Typography>
                                        <Typography variant="h6" className={classes.educationText}>
                                            <span style={{color : "white"}}>  Address : </span> #646,Vithobha Nivas,1st main , 4th cross ,<br/>
                                             pipeline road , T. Dasarahalli, Bangalore, KA 560057
                                        </Typography>
                                        </Grid> 
                                        </CardContent>
                                    </Card>
                            </Grid>
                            {/* <Grid item>
                                     <Card className={classes.card}>
                                        <CardContent>
                                        <Grid item >
                                        <Typography variant="h6">
                                            <span style={{color : "grey"}}> Phone :  </span> +91 8892510285
                                        </Typography>
                                        <Typography variant="h6">
                                            <span style={{color : "grey"}}>  Email : </span> apoorva.jakati@gmail.com
                                        </Typography>
                                        </Grid> 
                                        </CardContent>
                                     </Card>
                            </Grid> */}



                        </Grid>

                    </Grid>      
                </Grid>            
            </Paper>
            </Grid>  

            <Grid>
            <Paper elevation={3} className={classes.paper} square="true">
                <Grid container justify={matchesSM ? "center" : "space-between"} alignItems="center" >


                    <Grid item className={classes.firstCard}>
                    <Card className={classes.card}>
                        <CardContent>
                        <Grid item container direction="column" justify="center" alignItems="center">
                        <Typography variant="h3" className={classes.educationText}>
                          Professional Summary
                        </Typography>
                        <Typography variant="body1" className={classes.educationText} paragraph>
                        Have 2 years & 10 months of experience in software development using Java, J2EE and
                        Javascript technologies.
                        </Typography>
                        
                        <Typography variant="body1" className={classes.educationText} paragraph>
                         Also experienced in Spring MVC, Hibernate frameworks, SQL queries
                        (using MySql) & Tomcat 8.x. Proficient with tools such as Eclipse, VS Code, Ant and Maven.
                        </Typography>
                        
                        </Grid> 
                        </CardContent>
                    </Card>
                    </Grid>  

    
                </Grid>            
            </Paper>
            </Grid> 
            
            <Grid item>
            <Paper elevation={3} className={classes.paper}>
                <Grid container direction="column" justify="space-between" alignItems="center" >

                    <Grid item>
                    <Typography variant="h3" style={{ color : "black"}}>
                          Education
                        </Typography>
                    </Grid>

                    <Grid item className={classes.firstCard}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="react" src={react} />
                            </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "10rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
                                    <Grid container direction="column"   alignItems="center">
                                        <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            Bachelor in Engineering
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            Mechanical Engineering
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            Sri Krishna Institute of Technology
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md>
                            <Typography variant="h4" className={classes.educationText}>
                               2011 - 2015
                            </Typography>
                            </Grid>
                            </Grid>
                        
                        </CardContent>
                    </Card>
                    </Grid>  

                    <Grid item className={classes.firstCard}>
                    <Card className={classes.card}>
                        <CardContent>
                        <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="react" src={react} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "10rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            PUC
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            PCMB (72.25%)
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            Sheshadripuram Composite PU College
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md>
                            <Typography variant="h4" className={classes.educationText}>
                               2009 - 2011
                            </Typography>
                            </Grid>
                            </Grid>
                        
                        </CardContent>
                    </Card>
                    </Grid> 

                    <Grid item className={classes.firstCard}>
                    <Card className={classes.card}>
                        <CardContent>
                        <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="react" src={react} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "10rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            SSLC
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            St. Mary's High School (90.40%)
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md>
                            <Typography variant="h4" className={classes.educationText}>
                               2009
                            </Typography>
                            </Grid>
                            </Grid>
                        
                        </CardContent>
                    </Card>
                    </Grid>
   
                </Grid>            
            </Paper>
            </Grid> 

            <Grid item >
            <Paper elevation={3} className={classes.skillsPaper}>
            
                <Grid container direction="column" >
                    <Grid item container direction="column" alignItems="center">
                       <Typography variant="h3" style={{ color : "black" , marginTop : "1em"}}>
                          Skills
                        </Typography>
                    </Grid>

                    <Grid item>
                    <Skills />
                    </Grid>
                </Grid>
              
                        
            </Paper>
            </Grid>

            </Grid>

            <div >

            </div>
        </React.Fragment>
    )
}
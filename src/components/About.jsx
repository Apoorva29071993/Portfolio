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
import mechanical from '../assets/mechanical1.svg';
import school from '../assets/school1.svg';
import twelve from '../assets/twelve.svg';
import programmer from '../assets/programmer.svg';
import workstation from '../assets/workstation.svg';
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
        marginLeft : "5rem",
        marginRight : "10rem",
        [theme.breakpoints.down("sm")]: {
          height: "10em",
          width: "10em",
          maxHeight: 300,
          maxWidth: 300,
          marginTop : "3rem",
          marginBottom : "0rem",
          marginleft : "-5rem"
        },
        [theme.breakpoints.down("xs")]: {
            height: "10em",
            width: "10em",
            maxHeight: 300,
            maxWidth: 300,
            marginRight : "5rem",
            marginTop : "0.5em",
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
        //borderRadius : "4em",
        [theme.breakpoints.down("xs")] : {
            marginRight : 0
        }
    },
    card : {
        backgroundColor : theme.palette.common.gross,
        boxShadow : theme.shadows[10],
        borderRadius : "2rem",
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
        marginBottom : "3rem",
        backgroundColor : "red",
        borderRadius : "0rem" ,
       // backgroundImage: `url(${revolutionBackground})`,
        [theme.breakpoints.down("sm")]: {
            marginTop : "5rem"
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
            textAlign : "center",
            fontSize : "1rem"
        }
    },
    skillsPaper : {
        marginTop : "3rem",
        marginLeft : '3rem',
        marginRight : '3rem' ,
        backgroundImage: `url(${revolutionBackground})`,   
    },
    button : {
       
        fontSize : "2em" ,
        backgroundColor : "white" ,
        color : theme.palette.common.gross,
        marginBottom : "2em",
        "&:hover" : {
            color : "white",
            backgroundColor : theme.palette.common.gross
        },
        [theme.breakpoints.down("sm")]:{
            fontSize : "1em"
        }
    }
}))

export default function About(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            
            <Grid container direction="column" alignItems="center" className={classes.mainContainer}>
            <Paper elevation={3} className={classes.paper}> 
                <Grid item>
                    <Typography variant="h2" 
                    style={{ fontSize : matchesSM ? "3rem" : undefined  , 
                    minWidth : matchesSM ? "25rem" : 0 ,
                    marginTop : matchesSM ? "4rem" : undefined,
                    textAlign : "center" ,
                    color : "white"}}>
                        About Myself
                    </Typography>
                </Grid>

            <Grid item>
            {/* <Paper elevation={24} className={classes.paper} square="true"> */}
                <Grid container direction={matchesSM ? "column" : "row"} justify={matchesSM ? "center" : "flex-start"} alignItems="center" >

                <Grid item   >
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
            {/* </Paper> */}
            </Grid>  

            <Grid>
            {/* <Paper elevation={3} className={classes.paper} square="true"> */}
                <Grid container justify={matchesSM ? "center" : "center"} alignItems="center" >


                    <Grid item className={classes.firstCard}>
                            <Grid style={{ color : "white" , textAlign : "center"}}>
                            <Typography variant="h3" className={classes.educationText}>
                          Professional Summary
                        </Typography>
                            </Grid>

                    <Card className={classes.card}>
                        <CardContent>
                        <Grid item container direction="column" justify="center" alignItems="center">
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
            {/* </Paper> */}
            </Grid> 

            <Grid item className={classes.firstCard}>
                            <Grid style={{ color : "white" , textAlign : "center"}}>
                            <Typography variant="h3" className={classes.educationText}>
                          Work History
                        </Typography>
                            </Grid>

                            

                    <Card className={classes.card}>
                        <CardContent>
                        
                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>


                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "5rem" , 
                                                marginLeft : matchesSM ? "2rem" : "5rem",
                                                marginBottom : matchesSM ? 0 : "2rem" }}>
                                    <Grid container direction="column"   alignItems="center">

                                        
                        <Grid item style={{marginLeft : matchesSM ? "-2em" : "3em"}}>
                                <img className={classes.icon} alt="programmer" src={programmer} />
                            </Grid>
                                        <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            Software Engineer
                                            </Typography>
                                            <Typography variant="h4" className={classes.educationText}>
                                            Imonitor Solutions (Bangalore, India)
                                            </Typography>
                                            <Typography variant="h4" className={classes.educationText} >
                                            Sep 2017 - July 2019
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            Project Name : Home Automation
                                            </Typography>
                                            <Typography variant="body1" className={classes.educationText} paragraph>
                                            I have developed and tested UI, APIs, status, alerts, alarms, device configurations &
                                            control functionalities on IOT devices like AC, Dimmer, Security Systems, Switches,
                                            Dimmers, Cameras, LCD Remotes etc.
                                          </Typography>

                                          <Typography variant="subtitle1" className={classes.educationText}>
                                            Project Name : Alexa & Google Home
                                            </Typography>
                                            <Typography variant="body1" className={classes.educationText} paragraph>
                                            Implemented smart home speech to text conversions for Alexa and Google Home device
                                            using Node API and restful web services.
                                          </Typography>
                                      </Grid>
                                      
                                    
                                    <Grid item>
                                    <Typography variant="h4" className={classes.educationText} >
                                           -----------------------------------------------------------------------------------------------------------------------

                                    </Typography>
                                    </Grid>

                                    <Grid item style={{marginLeft : matchesSM ? "-2em" : "3em"}}>
                                <img className={classes.icon} alt="workstation" src={workstation} />
                                   </Grid>

                                      <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            Graduate Apprentice Trainee
                                            </Typography>
                                            <Typography variant="h4" className={classes.educationText}>
                                            Bharat Electronics Ltd. (Bangalore, India)
                                            </Typography>
                                            <Typography variant="h4" className={classes.educationText} >
                                            Feb 2016 - Feb 2017
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            Project Name : Human Resource Information System
                                            </Typography>
                                            <Typography variant="body1" className={classes.educationText} paragraph>
                                            Developed UI and backend functionalities to retrieve attendance, payroll, identification
                                            and other details for a given period of time using Java, Struts and HTML.
                                          </Typography>

                                          <Typography variant="subtitle1" className={classes.educationText}>
                                            Project Name : Food Order Management System
                                            </Typography>
                                            <Typography variant="body1" className={classes.educationText} paragraph>
                                            Developed a food order management application in integration with the premises canteen
                                            exclusively for the company staff.
                                          </Typography>
                                      </Grid>

                                      
                                    </Grid> 
                            </Grid>

                        


                            </Grid>     
                        </CardContent>
                    </Card>
                    </Grid> 
            
            <Grid item>
            {/* <Paper elevation={3} className={classes.paper}> */}
                <Grid container direction="column" justify="space-between" alignItems="center" >

                    

                    <Grid item className={classes.firstCard}>

                    <Grid item>
                        <Typography variant="h3"  style={{ color : "white" , textAlign : "center"}}>
                            Education
                        </Typography>
                    </Grid> 

                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>


                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="mechanical" src={mechanical} />
                            </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "5rem" , 
                                                marginLeft : matchesSM ? "2rem" : "5rem",
                                                marginBottom : matchesSM ? 0 : "2rem" }}>
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

                            <Grid item md style={{marginBottom : matchesSM ? "3rem" : 0 }}>
                            <Typography variant="h4" className={classes.educationText}>
                               2011 - 2015
                            </Typography>
                            </Grid>
                            </Grid>

                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="twelve" src={twelve} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "3.5rem" , 
                                                marginLeft : matchesSM ? "2rem" : "5rem" ,
                                                marginBottom : matchesSM ? 0 : "2rem"
                                                }}>
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

                            <Grid item md style={{marginBottom : matchesSM ? "3rem" : 0 }}>
                            <Typography variant="h4" className={classes.educationText}>
                               2009 - 2011
                            </Typography>
                            </Grid>
                            </Grid>

                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="school" src={school} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "7.5rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
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

                    {/* <Grid item className={classes.firstCard}>
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
                    </Grid>  */}

                    {/* <Grid item className={classes.firstCard}>
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
                    </Grid> */}
   
                </Grid>            
            {/* </Paper> */}
            </Grid> 

            <Grid item >
            {/* <Paper elevation={3} className={classes.skillsPaper}> */}
            
                <Grid container direction="column" alignItems="center">
                   

                    <Grid item>
                    <Skills />
                    </Grid>

                    
                </Grid>
              
                        
            {/* </Paper> */}
            </Grid>
                
            <Grid item container direction="column" alignItems="center">
            <Grid item>
                        <Button className={classes.button} variant="outlined">Click Here To Download CV</Button>
            </Grid>
            </Grid>
            
            </Paper> 
            </Grid>
           
        </React.Fragment>
    )
}
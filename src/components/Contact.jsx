import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery , useTheme, AppBar, Toolbar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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
        fontSize : "1.75rem",
        [theme.breakpoints.down("sm")] : {
            fontSize : "1.4rem",
            marginTop : "1rem",
            marginBottom : "-1rem",
      
            textAlign : "center"
        }
    },
    gridItem : {
        marginBottom : "1rem"
    }
}))

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <Grid container direction="column" alignItems="center" style={{backgroundColor : "black"}}>

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
                            <Grid item style={{marginRight : "2em"}}>
                                <Typography variant="body1" className={classes.textContainer3}>
                                Address : 
                                </Typography>
                            </Grid>

                            <Grid item md>
                                <Typography variant="body1" className={classes.textContainer3}>
                                #646 Vithoba Nivas , 1st main , 4th cross , pipeline road 
                                T.Dasarahalli , Bangalore-560057
                            </Typography>
                            </Grid>
                        
                        </Grid>

                        <Grid item container direction={matchesSM ? "column" : "row"} className={classes.gridItem} justify="flex-start">
                            <Grid item style={{marginRight : "2em"}}>
                                <Typography variant="body1" className={classes.textContainer3}>
                                Phone : 
                                </Typography>
                            </Grid>

                            <Grid item md>
                                <Typography variant="body1" className={classes.textContainer3}>
                                +91 8892510285
                            </Typography>
                            </Grid>
                        
                        </Grid>
                    </Grid>

                    <Grid item container direction="column" md style={{ marginTop : matchesSM ? "3rem" : undefined}}>
                        <Grid item>
                        <Typography variant="h3" className={classes.textContainer2}>
                            Form Page
                        </Typography>
                        </Grid>

                        <Grid item>
                            
                        </Grid>

        
                    </Grid>

                </Grid>


            </Grid>
        </React.Fragment>
    )
}
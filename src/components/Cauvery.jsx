import React , {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import revolutionBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles(theme => ({
     rev : {
         height : "50%",
         width : "50%",
         [theme.breakpoints.down("sm")] : {
            height : "100%",
            width : "100%"
         } 
     },
     carousel : {
        marginTop : "2em",
        [theme.breakpoints.down("sm")] : {
            marginTop : "4em"
         } 
     },
     mainContainer : {
         backgroundColor : "lightblue", 
     }
}));

export default function Cauvery(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item className={classes.carousel}>
                <Carousel 
                easing="cubic-bezier(1,.15,.55,1.54)" 
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)" 
                enableAutoPlay 
                autoPlaySpeed={1500}
                transitionMs={700}>
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img  className={classes.rev}alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img  className={classes.rev}alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
                        <img className={classes.rev} alt="123" src={revolutionBackground} />
               </Carousel>
                </Grid>

                <Grid item style={{marginTop : "2em"}}>
                <Typography variant="h2" style={{  textAlign : "center"}}>
                          Cauvery Enterprises
                </Typography>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}
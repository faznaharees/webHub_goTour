import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Card,CardActionArea,CardContent,IconButton,Toolbar,Typography,Button} from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import Search from '@material-ui/icons/Search';
import {withRouter,Router } from 'react-router-dom'
import React from 'react'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import EachQuestion from './EachQuestion';
import {Link} from 'react-router-dom'


function Questions(props) {
    const [qns,setQns] = React.useState([
        {id:1,qn:"Are you a Beach person or Mountain person ?",option1:"Beach",option2:"Mountain",next:2},
        {id:2,qn:"Do your prefer Indian food or Chinese food ?",option1:"Indian",option2:"Chinese",next:3},
        {id:3,qn:"Do you like calm places or Crowded ones",option1:"Calm",option2:"Crowded",next:4},
        {id:4,qn:"Do you prefer walking / Vehicles ?",option1:"Walking",option2:"Vehicles",next:null},
    
    
    ])
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Montserrat',
            'sans-serif'
          ].join(','),
        },
        title:{
            fontFamily: [
                'Roboto',
                'sans-serif'
              ].join(','),
        }
      });
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily:'Roboto',
    },
    appbar: {
        borderRadius:"30px 30px 0px 0px",
        background:"#e39c31",
        color:'black',
        height:"10vh",
    },
    main: {
        height:"100vh",
        background:"black",
    },
    input :{
        border:"1px solid black",
        background:"white",
        borderRadius:"10px",

    },
    bold:{
        fontWeight:"bold"
    }
  ,
    orange: {
        background:"#e39c31",
        height:"90vh",
        // paddingTop:"30%",
        // paddingLeft:"20%",
    }
  }));
  const [id,setId] = React.useState(props.match.params.id)
  const [item,setItem] = React.useState(
      qns[props.match.params.id-1]
  )
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
      <div className={classes.main}>
          <AppBar className={classes.appbar} position="static">
            <Toolbar>
                
                <Typography variant="h6" className= {classes.title}>
                GoTour
                </Typography>
                <Button color="inherit" className={classes.bold}>Query</Button>
                <Button color="inherit" className={classes.bold}>Login</Button>

            </Toolbar>
          </AppBar>
          <div className={classes.orange} style={{display:"flex"}}>
            <div style={{margin:"auto"}}>
               
<Card>
               <CardActionArea>
                    <CardContent>
                        {qns[props.match.params.id -1].qn}
                        <br/>
                        <br/>
                        
                        <div style={{display:"inline",marginBottom:"30px"}} className={classes.buttons}>
                       <Link to={`${qns[props.match.params.id -1].next !== null ? `/survey/${qns[props.match.params.id -1].next.toString()}`: `/home`}  `}> <Button className={classes.button} style={{float:"right"}} width="50%">{qns[props.match.params.id -1].option1}</Button></Link>

                       <Link to={`${qns[props.match.params.id -1].next !== null ? `/survey/${qns[props.match.params.id -1].next.toString()}`: `/home`}  `}> <Button className={classes.button} style={{float:"left"}} width="50%">{qns[props.match.params.id -1].option2}</Button></Link>
                        </div>
                    </CardContent>
               </CardActionArea>
            </Card>                    
             
                      </div>
          </div>
      </div>
      </ThemeProvider>
    );
  }
  
  export default withRouter(Questions);

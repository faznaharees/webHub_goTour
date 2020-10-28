import '../../main.css'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,IconButton,Toolbar,Typography,Button} from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import Search from '@material-ui/icons/Search';
import {Link, withRouter } from 'react-router-dom'

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
function Main() {
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
        fontWeight:"bold",
        color:"black"
    }
  ,
    orange: {
        background:"#e39c31",
        height:"90vh",
        // paddingTop:"30%",
        // paddingLeft:"20%",
    }
  }));
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
      <div className={classes.main}>
          <AppBar className={classes.appbar} position="static">
            <Toolbar>
                
                <Typography variant="h6" className= {classes.title}>
                GoTour
                </Typography>
               <Link to="survey/1"> <Button color="inherit" className={classes.bold}>Survey</Button></Link>
                <Button color="inherit" className={classes.bold}>Login</Button>

            </Toolbar>
          </AppBar>
          <div className={classes.orange} style={{display:"flex"}}>
            <div style={{margin:"auto",fontFamily:'Montserrat'}}>

              <div style={{float:"left",color:"white"}}>What do you want to find in </div>
              <div style={{float:"right",marginTop:"-12px",fontSize:"20px",fontWeight:"bold"}}>
                  
                  <IconButton>
                      <LocationOn/></IconButton>
                      
                      Trivandrum</div>
            <br/>
        <Input
        placeholder="Search your places"
        disableUnderline
        fullWidth
          id="input-with-icon-adornment"
          className={classes.input}
          endAdornment={
            <InputAdornment position="end" className={classes.end}>
              <Search />
            </InputAdornment>
          }
        />
                      </div>
          </div>
      </div>
      </ThemeProvider>
    );
  }
  
  export default Main;
  
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,IconButton,Toolbar,Typography,Button} from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import Search from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Menubar() {
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Montserrat',
            'sans-serif'
          ].join(','),
        },
      });
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainbar:{
        background:"white"
    }
   
  }));
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
      <div className={classes.mainbar}>
        <AppsIcon/>
        <ListIcon/>
        <div style={{float:"right"}}>
            <FilterListIcon/>
            <ArrowDropDownIcon/>
        </div>
      </div>
      </ThemeProvider>
    );
  }
  
  export default Menubar;
  
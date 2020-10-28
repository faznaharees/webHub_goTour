import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import LocationOn from '@material-ui/icons/LocationOn';
import {withRouter } from 'react-router-dom'

function CardComponent({name,distance,star,gender,img,stay,entry}) {
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          minWidth:200,
        },
      });
     
      const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color:"blue"}}>
              
             <LocationOn style={{fontSize:"15px"}}/> {distance}km 
            </Typography>
            <Typography style={{fontSize:"15px"}}>
            {
             gender!==undefined &&<div>
                 <br/>
                 {gender==="all" && "Stay for all"}
                 {gender==="women" && "Only for women"}
                 {gender==="men" && "Only for men"}

             </div>
         }
         {
             entry!==undefined &&
             entry===null && "Free entry"}
          {entry!==undefined && 
         entry!==null && <div>
             Entry fee {entry}</div>} 
         {stay!==undefined && 
         stay===null && "Free Stay"}
              {stay!==undefined && 
         stay!==null && <div>
             Stay at Rs {stay}</div>} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display:"inline"}}>
         <Rating name=" size-small" size="small" readOnly value={star}/>
        <div style={{float:"right",right:"5px",fontSize:"13px"}}><u>Know more</u></div>
         </CardActions>

       
      </Card>
    );
  }
  
  export default (CardComponent);
  
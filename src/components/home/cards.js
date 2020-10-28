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
            <Typography variant="body2" color="textSecondary" component="p">
              
             <LocationOn style={{fontSize:"15px"}}/> {distance}km 
            </Typography>
            <Typography>
            {
             gender!==undefined &&<div>
                 <br/>
                 {gender==="all" && "Stay for all"}
                 {gender==="women" && "Only for women"}
                 {gender==="men" && "Only for men"}

             </div>
         }
         {stay!==undefined && 
         stay===null && "Free Stay"}
              {stay!==undefined && 
         stay!==null && <div>
             Stay at Rs {stay}</div>} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
         <Rating name=" size-small" size="small" readOnly value={star}/>
         </CardActions>

       
      </Card>
    );
  }
  
  export default CardComponent;
  
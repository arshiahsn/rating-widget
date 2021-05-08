import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RatingWidget from './RatingWidget';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=".jpg"
          title="Porduct"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Product {props.id}
          </Typography>
          <p>{props.uuid}</p>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor justo, volutpat et mauris id, pulvinar hendrerit urna. Vivamus id tristique est. Praesent suscipit tristique lorem, vitae mattis massa consequat vel. Morbi sit amet euismod nibh.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <RatingWidget uuid={props.uuid}/>
      </CardActions>
    </Card>
  );
}
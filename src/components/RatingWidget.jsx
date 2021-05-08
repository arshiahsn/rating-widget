import React from 'react';
import Star from './Star';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    widget: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start'

    },ratingStars: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
      },
      
      ratingStars: {
        display: 'inlineBlock',
        padding: 0 ,
        fontSize: 2.5,
        color: '#cccccc'

      },
      hover: {
        color: '#ffd73e'
      },
      
      active: {
        color: '#FF9800'
      }
  });

export default function RatingWidget(){
    const classes = useStyles();
    


    function renderStar(number){
        return (
            <Star
            index={number}
            />
        );
    }


    return(
        <Box className={classes.widget}>
            {[1, 2, 3, 4, 5].map((element, number) =>
                renderStar(number)
            )}  
        </Box>
    );
}
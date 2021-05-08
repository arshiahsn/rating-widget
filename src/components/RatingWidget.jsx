import React, {useState} from 'react';
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
    const[hoveredStar, setHoveredStar] = useState(0);
    const[clickedStar, setClickedStar] = useState(0);
    
    const handleMouseEnter = (number) => {
        setHoveredStar(number);
        console.log(hoveredStar);
    }

    const handleMouseLeave = () => {
        setHoveredStar(0);
        console.log(hoveredStar);
    }

    const handleMouseClick = (number) => {
        setClickedStar(number);
        console.log(clickedStar);
    }

    function renderStar(number, key){
        return (
            <Star
            key = {key}
            onMouseEnter={() => handleMouseEnter(number)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleMouseClick(number)}
            index={number}
            hovered={hoveredStar}
            selected={clickedStar}
            />
        );
    }


    return(
        <Box className={classes.widget}>
            {[1, 2, 3, 4, 5].map((element, number) =>
                renderStar(element, number.toString())
            )}  
        </Box>
    );
}
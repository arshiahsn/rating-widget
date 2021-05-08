import React, {useState, useEffect} from 'react';
import Star from './Star';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import RenderStar from './RenderStar';
import { PROPERTY_TYPES } from '@babel/types';

const useStyles = makeStyles({

    widget: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start'

    }
  });

export default function RatingWidget(props){
    const classes = useStyles();
    const[hoveredStar, setHoveredStar] = useState(0);
    const[clickedStar, setClickedStar] = useState(0);
    
    {/* Handle api call in effect hook */}
    useEffect(()=>{
        if(clickedStar)
            handleSubmitRating();
    },[clickedStar]);

    const handleMouseEnter = (number) => {
        if(!clickedStar)
            setHoveredStar(number);
    }

    const handleMouseLeave = () => {
        setHoveredStar(0);
    }

    const handleMouseClick = (number) => {
        if(!clickedStar)
            setClickedStar(number);
       
    }
    {/* Submit rating as a JSON to the server at /api/ratings */}
    const handleSubmitRating = () => {
        const requestBody = {
            user: 'AuthenticatedUser',
            uuid: props.uuid,
            rating: clickedStar
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        };
        console.log(requestBody);
        fetch('https://localhost:8000/api/ratings', requestOptions)
            .then(response => response.json())
            .catch(error => console.log(error));
    }



    return(
        <Box className={classes.widget}>
            {[1, 2, 3, 4, 5].map((element, number) =>
                <span
                key={number.toString()}                 
                onMouseOver={() => handleMouseEnter(element)}
                onMouseOut={() => handleMouseLeave()}
                onClick={() => handleMouseClick(element)}>
                    <RenderStar
                    number={element} 
                    hoveredStar={hoveredStar}
                    clickedStar={clickedStar}/>
                </span>
            )}  
        </Box>
    );
}
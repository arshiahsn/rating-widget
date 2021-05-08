import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({  
      empty: {
        color: '#cccccc'
      },
      hover: {
        color: '#696969'
      },
      
      active: {
        color: '#000000'
      }
  });



export default function Star(props){
    const classes = useStyles();
    {/* Default color is light grey */}
    let currentClass = classes.empty;
    {/* 
    If a star is clicked,
    and if the current start is less than or equal to the one that was clicked, 
    the color changes to black 
    */}
    if (props.index <= props.selected)
        currentClass = classes.active;
    else{
        {/* 
        If a star is not clicked but it's hovered, 
        and if the current start is less than or equal to the one that was hovered,
        the color changes to dark grey
        */}
        if (props.index <= props.hovered)
            currentClass = classes.hover;
    }
        
    return(
        <div className={currentClass} >
            <span><FontAwesomeIcon icon={faStar} className={currentClass} onClick={props.onClick} /></span>
        </div>
    );
}
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
    let currentClass = classes.empty;
    if (props.index <= props.selected)
        currentClass = classes.active;
    else
        if (props.index <= props.hovered)
        currentClass = classes.hover;
    return(
        <div className={currentClass} >
            <span><FontAwesomeIcon icon={faStar} className={currentClass} onClick={props.onClick} onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}/></span>
        </div>
    );
}
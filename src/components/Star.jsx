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
        color: '#FFFFFF'
      }
  });



export default function Star(props){
    const classes = useStyles();
    return(
        <Box>
            <FontAwesomeIcon icon={faStar} className={classes.empty}/>
        </Box>
    );
}
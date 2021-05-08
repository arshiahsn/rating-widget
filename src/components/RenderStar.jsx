import React from 'react';
import Star from './Star';

export default function RenderStar(props){
    return (
        <Star
        index={props.number}
        hovered={props.hoveredStar}
        selected={props.clickedStar}
        />
        
    );
}
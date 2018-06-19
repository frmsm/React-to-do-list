import React from 'react';

export const Del = (props) => {
    return <span style={{cursor: 'pointer'}} id={props.id} onClick={props.onClick}>  -  x</span>
};
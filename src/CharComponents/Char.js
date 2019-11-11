import React from 'react'

const char = (props) =>{
    const style = {
        overflow: 'hidden',
        display: 'inline-block',
        padding: '4x',
        margin: '4px',
        border: '1px solid black',
        textAlign: 'center',
        width: '20px',
        height: '25px'
    };
    return(
        <div style = {style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char;
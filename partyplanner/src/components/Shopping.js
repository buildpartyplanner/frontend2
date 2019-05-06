import React from 'react';

function Shopping(props) {
    let purchased = props.item.purchased ? ' purchased' : '';
    return (
        <div
            className={`item ${purchased}`}
            key={props.item.id}
            onClick={event => {
                props.toggleitem(props.item.id);
            }}
            
        >

                   <p>{props.item.item}</p> 
                </div>
    );
}

export default Shopping
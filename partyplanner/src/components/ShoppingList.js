import React from 'react';

import Shopping from './Shopping';

import './Shopping.css'

function ShoppingList(props) {
    return (
        <div className='ShoppingList'>
            {props.ShoppingList.map(item => {
                return <Shopping item={item} toggleitem={props.toggleitem} />;
            })}
        </div>
    )
}


  export default ShoppingList
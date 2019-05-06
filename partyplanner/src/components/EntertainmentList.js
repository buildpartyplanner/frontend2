import React from 'react';

import Entertainment from './Entertainment';

import './Entertainment.css'

function EntertainmentList(props) {
    return (
        <div className='EntertainmentList'>
            {props.EntertainmentList.map(task => {
                return <Entertainment task={task} toggleTask={props.toggleTask} />;
            })}
        </div>
    )
}


  export default EntertainmentList
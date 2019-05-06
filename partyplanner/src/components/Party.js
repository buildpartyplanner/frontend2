import React from 'react';


const Party = props => {
  return (
    <div className="Party">
      <p>{props.guests}</p>
      <p>{props.theme} </p>
      <p>{props.date} </p>
      <button className="delete-button" onClick={ev => props.deleteParty(ev, props.id)}>Delete</button>
    </div>
  );
};
Party.defaultProps = {
  guests: '',
  theme: '',
  date: ''
};
export default Party;
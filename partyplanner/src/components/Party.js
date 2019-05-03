import React from 'react';


const Party = props => {
  return (
    <div className="Party">
      <p>{props.name}</p>
      <p>{props.height} </p>
      <p>{props.age} </p>
      <button className="delete-button" onClick={ev => props.deleteParty(ev, props.id)}>Delete</button>
    </div>
  );
};
Party.defaultProps = {
  name: '',
  height: '',
  age: ''
};
export default Party;
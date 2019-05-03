import Smurf from './Party';
import React, { Component } from 'react';

class Parties extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Smurfs">
      
        <h1>Party Planner Details!</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
Smurf.defaultProps = {
 smurfs: [],
};
export default Parties;
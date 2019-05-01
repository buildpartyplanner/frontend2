import React, { Component } from "react";
import { connect } from "react-redux";
import PartyItem from "./PartyItem";

class PartyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.parties.map((party, index) => (
          <PartyItem key={index} party={party} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parties: state.parties
  };
};

export default connect(mapStateToProps)(PartyList);
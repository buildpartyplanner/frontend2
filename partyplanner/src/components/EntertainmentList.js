import React, { Component } from "react";
import { connect } from "react-redux";
import EntertainmentItem from "./EntertainmentItem";

class EntertainmentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.entertainments.map((entertainment, index) => (
          <EntertainmentItem key={index} entertainment={entertainment} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entertainments: state.entertainments
  };
};

export default connect(mapStateToProps)(EntertainmentList);
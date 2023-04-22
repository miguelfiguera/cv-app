import React, { Component } from "react";

export class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="work-item">
        <h4>Company: {this.props.data.company}</h4>
        <h4>
          From: {this.props.data.from} to: {this.props.data.to}
        </h4>
        <h4>Position Title: {this.props.data.positionTitle}</h4>
        <h5>Common tasks: {this.props.data.commonTasks}</h5>
        <button className="erase" onClick={()=>{this.props.handleDelete(this.props.data.id)}}>X</button>
      </div>
    );
  }
}

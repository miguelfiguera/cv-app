import React, { Component } from "react";

export class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3 ms-3 me-3" style={{width: '18rem'}}>
      <div className="card-body">
        <h4 className="card-title">Company: {this.props.data.company}</h4>
        <h4 className="card-text">
          From: {this.props.data.from} to: {this.props.data.to}
        </h4>
        <h4 className="card-text">Position Title: {this.props.data.positionTitle}</h4>
        <h5 className="card-text">Common tasks: {this.props.data.commonTasks}</h5>
        <button className="btn-close" onClick={()=>{this.props.handleDelete(this.props.data.id)}}></button>
      </div>
      </div>
    );
  }
}

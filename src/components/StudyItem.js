import React, { Component } from "react";

export class StudyItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3 ms-3 me-3" style={{width: '18rem'}}>
        <div className="card-body">
        <h4 className="card-title">School/University: {this.props.data.school}</h4>
        <h4 className="card-text list-group-item">
          From: {this.props.data.beggining} to: {this.props.data.graduationDate}
        </h4>
        <h4 className="card-text list-group-item">Degree: {this.props.data.degree}</h4>
        <button
          className="btn-close"
          onClick={() => {
            this.props.handleDelete(this.props.data.id);
          }}
        >  </button>
        </div>
      </div>
    );
  }
}

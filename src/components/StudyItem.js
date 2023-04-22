import React, { Component } from "react";

export class StudyItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="study-item">
        <h4>School/University: {this.props.data.school}</h4>
        <h4>
          From: {this.props.data.beggining} to: {this.props.data.graduationDate}
        </h4>
        <h4>Degree: {this.props.data.degree}</h4>
        <button
          className="erase"
          onClick={() => {
            this.props.handleDelete(this.props.data.id);
          }}
        > X </button>
      </div>
    );
  }
}

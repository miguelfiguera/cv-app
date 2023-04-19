import React, { Component } from "react";
import { BasicInfo } from "./EditableLabel.js";

export class GeneralContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="GeneralContainer">
        <BasicInfo />
      </div>
    );
  }
}

import React, { Component } from "react";
import { EditableLabel } from "./EditableLabel.js";

export class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal">
        <div className="personal-info">
          <EditableLabel value="First Name" tag="h1" />
          <EditableLabel value="Last Name" tag="h1" />
          <EditableLabel value="occupation" tag="h3" />
        </div>

        <div className="contact">
          <EditableLabel value="Address Line 1" tag="p" />
          <EditableLabel value="Address Line 2" tag="p" />
          <EditableLabel value="Town/City" tag="p" />
          <EditableLabel value="Country" tag="p" />
          <EditableLabel value="Post Code" tag="p" />
          <EditableLabel value="Phone" tag="p" />
          <EditableLabel value="Email" tag="p" />
        </div>
      </div>
    );
  }
}

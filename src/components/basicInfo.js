import React, { Component } from "react";
import { EditableLabel } from "./EditableLabel.js";

export class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shadow-lg container-sm rounded-3 row mt-3 ms-0 ">
        <div className=" col">
          <EditableLabel value="First Name" tag="h1" />
          <EditableLabel value="Last Name" tag="h1" />
          <EditableLabel value="occupation" tag="h3" />
        </div>
        <div className="col"></div>
        <div className="col">
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

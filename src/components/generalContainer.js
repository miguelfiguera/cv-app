import React, { Component } from "react";
import { BasicInfo } from "./basicInfo.js";
import {Education} from './education.js'
import {WorkExperience} from './workExperience'

export class GeneralContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" container border border-light rounded-3 shadow-lg">
        <BasicInfo />
        <Education />
        <WorkExperience />
      </div>
    );
  }
}

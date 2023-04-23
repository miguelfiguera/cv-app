import React, { Component } from "react";
import { StudyItem } from "./StudyItem.js";
import uniqid from "uniqid";

export class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        id: uniqid(),
        school: "",
        beggining: "",
        graduationDate: "",
        degree: "",
      },
      activeForm: false,
      activeButton: true,
      studies: [],
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  //Functions for this form
  toggleForm() {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton,
    });

    this.resetForm();
  }

  resetForm() {
    this.setState({
      default: {
        id: uniqid(),
        school: "",
        beggining: "",
        graduationDate: "",
        degree: "",
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let stud = this.state.default;
    this.setState({
      studies: [...this.state.studies, stud],
    });
    this.toggleForm();
    this.resetForm();
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      default: { ...this.state.default, [name]: value },
    });
  };

  handleCancel(e) {
    e.preventDefault();
    this.toggleForm();
  }

  handleDelete=(id)=> {
    const filteredStudies = this.state.studies.filter(study => {
      return study.id !== id;
    });

    this.setState({
      studies: filteredStudies,
    });
  }

  render() {
    const showStudies = this.state.studies.map((stud) => {
      return (
        <StudyItem handleDelete={this.handleDelete} data={stud} key={stud.id} />
      );
    });

    const hiddenForm = this.state.activeForm
      ? "education-form"
      : "education-form hidden";
    const theHiddenButton = this.state.activeButton
      ? "add-item btn btn-secondary mb-3"
      : "add-item hidden";

    return (
      <div className="FormHolder shadow-lg container-sm rounded-3 mb-3  mt-3">
        <h1 className="mt-1">Education:</h1>
        <div className="d-flex p-2 flex-row flex-wrap">
        {showStudies}
        </div>
        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="School">
              School/University
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="school"
              onChange={this.handleChange}
              defaultValue={this.state.default.school}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="beggining">
              From:
            </label>
            <input
              className="form-control form-control-lg"
              type="number"
              name="beggining"
              onChange={this.handleChange}
              defaultValue={this.state.default.beggining}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="graduationDate">
              To:
            </label>
            <input
              className="form-control form-control-lg"
              type="number"
              onChange={this.handleChange}
              name="graduationDate"
              defaultValue={this.state.default.graduationDate}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="Degree">
              Degree:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="degree"
              onChange={this.handleChange}
              defaultValue={this.state.default.degree}
            />
          </div>
          <div className="formControl-buttons">
            <button type="submit" className="mb-3 btn btn-primary">
              Save
            </button>
            <button className="btn btn-danger ms-3 mb-3" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </form>

        <button className={theHiddenButton} onClick={this.toggleForm}>
          + Add
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Work } from "./work";
import uniqid from "uniqid";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      default: {
        id: uniqid(),
        company: "",
        from: "",
        to: "",
        positionTitle: "",
        commonTasks: [],
      },
      activeForm: false,
      activeButton: true,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.toggleForm();
  }

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
        id:uniqid(),
        company: "",
        from: "",
        to: "",
        positionTitle: "",
        commonTasks: [],
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      works: [...this.state.works, this.state.default],
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

  handleDelete=(id)=> {
    const filteredWorks = this.state.works.filter(w => {
      return w.id !== id;
    });

    this.setState({
      works: filteredWorks,
    });
  }

  render() {
    const works = this.state.works.map((w) => {
      return <Work key={w.id} data={w} handleDelete={this.handleDelete} />;
    });

    const hiddenForm = this.state.activeForm
      ? "education-form"
      : "education-form hidden";

    const theHiddenButton = this.state.activeButton
      ? "add-item btn btn-secondary mb-3"
      : "add-item hidden";

    return (
      <div className="workExperience shadow-lg container-sm rounded-3  mt-3 mb-3">
        <h1 className="mt-1">Work Experience:</h1>
        <div className="d-flex p-2 flex-row flex-wrap">
        {works}
        </div>
        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <label htmlFor="company" className="input-group-text">
              Company
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="company"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="from" className="input-group-text">
              From:{" "}
            </label>
            <input
              className="form-control form-control-lg"
              type="number"
              name="from"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="to" className="input-group-text">
              To:
            </label>
            <input
              className="form-control form-control-lg"
              type="number"
              name="to"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="positionTitle" className="input-group-text">
              Position title:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="positionTitle"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="commonTasks" className="input-group-text">
              Common Tasks (separated by a ','):{" "}
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="commonTasks"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="mb-3 btn btn-primary">
            Save
          </button>
          <button className="btn btn-danger ms-3 mb-3" onClick={this.handleCancel}>
            <i className="fa fa-ban"></i> Cancel
          </button>
        </form>

        <button className={theHiddenButton} onClick={this.toggleForm}>
          + Add
        </button>
      </div>
    );
  }
}

export { WorkExperience };

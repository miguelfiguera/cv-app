import React, { Component } from "react";
import { Work } from "./work";
import uniqid from 'uniqid';


class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      default: {
        id:uniqid(),
        company: "",
        from: "",
        to: "",
        positionTitle: "",
        commonTasks: [],
      },
      activeForm: false,
      activeButton: true,
    };
    this.toggleForm=this.toggleForm.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleCancel=this.handleCancel.bind(this)
    this.handleDelete=this.handleDelete.bind(this)

  }

  handleCancel(e){
    e.preventDefault()
    this.toggleForm()
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

  handleDelete(id){
    const filteredWorks=this.state.works.filter((w)=>{return w.id!==id})

    this.setState({
        works: filteredWorks
    })
}

  render() {
    const works = this.state.works.map((w) => {
      return <Work key={w.id} data={w} handleDelete={this.handleDelete} />;
    });

    const hiddenForm = this.state.activeForm
      ? "education-form"
      : "education-form hidden";

    const theHiddenButton = this.state.activeButton
      ? "add-item"
      : "add-item hidden";

    return (
      <div className="workExperience">
        <h1>Work Experience:</h1>

        {works}

        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="formController">
            <label htmlFor="company">Company</label>
            <input type="text"defaultValue={this.state.default.company} name='company' onChange={this.handleChange}/>
          </div>
          <div className="formController">
            <label htmlFor="from">From: </label>
            <input type="number" defaultValue={this.state.default.from} name='from' onChange={this.handleChange}/>
          </div>
          <div className="formController">
            <label htmlFor="to">To:</label>
            <input type="number" name='to' onChange={this.handleChange} defaultValue={this.state.default.to}/>
          </div>
          <div className="formController">
            <label htmlFor="positionTitle">Position title:</label>
            <input type="text" defaultValue={this.state.default.positionTitle} name='positionTitle' onChange={this.handleChange}/>
          </div>
          <div className="formController">
            <label htmlFor="commonTasks">Common Tasks (separated by a ','): </label>
            <input type="text" defaultValue={this.state.default.commonTasks} name='commonTasks' onChange={this.handleChange}/>
          </div>
          <button type="submit">Save</button>
          <button className="cancel" onClick={this.handleCancel}>
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

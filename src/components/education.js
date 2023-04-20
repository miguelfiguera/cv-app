import React, { Component } from "react";
import {StudyItem} from './StudyItem.js'
import uniqid from 'uniqid';

export class Education extends React.Component{
    constructor(props){
        super(props)
        this.state={
            default:{
                id:uniqid(),
                school:'',
                beggining:'',
                graduationDate:'',
                degree:''
            },
            activeForm:false,
            activeButton:true,
            studies:[],
        }
        this.toggleForm=this.toggleForm.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    //Functions for this form
    toggleForm(){
        this.setState({
            activeForm:!this.state.activeForm,
            activeButton:!this.state.activeButton,
        })

        this.resetForm()
    }



    resetForm(){ 
        this.setState({
            default:{
                id:'',
                school:'',
                beggining:'',
                graduationDate:'',
                degree:''
            }
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            studies:[...this.state.studies,this.state.default]
        })
        this.toggleForm()
        this.resetForm()
    }

    handleChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			default: {...this.state.default, [name]: value}
		})
	}


    handleDelete(id){
        const filteredStudies=this.state.studies.filter(study=>{return study.id!==id})

        this.setState({
            studies: filteredStudies
        })
    }

    render(){

        const showStudies=this.state.studies.map((stud)=>{
            return (<StudyItem handleDelete={this.handleDelete} school={stud.school} graduationDate={stud.graduationDate} beggining={stud.beggining} degree={stud.degree} key={stud.id} />)
        })

        const hiddenForm= this.state.activeForm ? "education-form" : 'education-form hidden'
        const theHiddenButton= this.state.activeButton ? "add-item" : "add-item hidden"

        return(
            
            <div className="FormHolder">


                {showStudies}

                <form className={hiddenForm} onSubmit={this.handleSubmit}>
                    <div className="formController">
                        <label htmlFor="School">School/University</label>
                        <input type="text" name='school' onChange={this.handleChange} defaultValue={this.state.default.school}/>
                    </div>
                    <div className="formController">
                        <label htmlFor="beggining">From:</label>
                        <input type="number" name="beggining" onChange={this.handleChange} defaultValue={this.state.default.beggining} />
                    </div>
                    <div className="formController">
                        <label htmlFor="graduationDate">To:</label>
                        <input type="number" onChange={this.handleChange} name="graduationDate" defaultValue={this.state.default.graduationDate}/>
                    </div>
                    <div className="formController">
                        <label htmlFor="Degree">Degree:</label>
                        <input type="text" name="degree" onChange={this.handleChange} defaultValue={this.state.default.degree}/>
                    </div>
                    <div className="formControl-buttons">
                      <button type="submit">Save</button>
                      <button className="cancel" onClick={this.toggleForm}><i className="fa fa-ban"></i> Cancel</button>
                    </div>
                </form>

                <button className={theHiddenButton} onClick={this.toggleForm}> + Add</button>
            </div>



        )
    }
}
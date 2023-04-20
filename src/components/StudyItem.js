import React, { Component } from "react";

export class StudyItem extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="study-item">
                <h4>School/University: {this.props.school}</h4>
                <h4>From: {this.props.beggining} to: {this.props.graduationDate}</h4>
                <h4>Degree: {this.props.degree}</h4>
                <button className="erase" onClick={this.props.handleDelete(this.props.key)} >X</button>
            </div>

        )
    }
}

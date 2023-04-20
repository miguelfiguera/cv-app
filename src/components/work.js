import React, { Component } from "react";

export class Work extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="study-item">
                <h4>Company: {this.props.company}</h4>
                <h4>From: {this.props.beggining} to: {this.props.graduationDate}</h4>
                <h4>Position Title: {this.props.position}</h4>
                <h3>Common tasks: {this.props.tasks}</h3>
                <button className="erase" onClick={this.props.handleDelete(this.props.key)} >X</button>
            </div>

        )
    }
}

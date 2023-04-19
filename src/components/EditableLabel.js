import React, { Component } from "react";

export class EditableLabel extends React.Component{
    constructor(props){
        super(props);
      
            this.state = {
                text: props.value,
                isEditing: false,
                tag: props.tag,
                default: props.value
            }
    

    }
	handleClick = () => {
		this.setState({
			text: this.state.text,
			isEditing: true
		})}

        handleBlur = () => {
            this.save()
        }
        
        handleChange = (e) => {
            this.setState({
                text: e.target.value
            })
        }

        enter = (e) => {
            if(e.keyCode === 13) {
                this.save()
            }
        }

        save = (props) => {
            this.setState({
                text: this.state.text,
                isEditing: false
            })
    
            if(this.state.text === ''){
                this.setState({
                    text: this.state.default
                })
            }
        }



    
        render() {
            return(
                this.state.isEditing ?
                <input 
                    type="text" 
                    defaultValue={this.state.text}
                    autoFocus={true}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.enter}
                /> 
                :
                <this.state.tag onClick={this.handleClick}>{this.state.text}</this.state.tag>
            )
        }
    
    }

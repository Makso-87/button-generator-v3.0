import React, {Component} from 'react';
import {change} from "../../../functions/functions";

export default class InputCheck extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            checked: this.props.checked
        }
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    inputOnChange(event){
        change();
        const check = event.target.checked;
        this.setState({checked: check});
    }

    render(){
        return(
            <input id={this.props.id}
                   name={this.props.name}
                   type={this.props.type}
                   value={this.state.value}
                   checked={this.state.checked}
                   onChange={this.inputOnChange}
            />
        );
    }
}

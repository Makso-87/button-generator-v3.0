import React, {Component} from 'react';
import {change} from "../../../functions/functions";

export default class Option extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            selected: this.props.selected
        }
        this.inputOnSelect = this.inputOnSelect.bind(this);
    }

    inputOnSelect(e){
        change();
        const val = e.target.value;
        this.setState({value: val});
    }

    render(){
        return(
            <option value={this.state.value} selected={this.props.selected} onSelect={this.inputOnSelect}>{this.props.value}</option>
        );
    }
}

import React, {Component} from 'react';
import {change} from '../../../functions/functions';
export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }

        this.inputOnChange = this.inputOnChange.bind(this);
    }

    inputOnChange(e){
        change();
        const val = e.target.value;
        this.setState({value: val});
    }

    render(){

        return(
            <input id={this.props.id}
                   name={this.props.name}
                   type={this.props.type}
                   value={this.state.value}
                   max={this.props.max}
                   min={this.props.min}
                   step={this.props.step}
                   checked={this.props.checked}
                   onChange={this.inputOnChange}
            />
        );
    }
}





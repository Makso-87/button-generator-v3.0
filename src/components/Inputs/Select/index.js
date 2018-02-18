import React, {Component} from 'react';
import {change} from "../../../functions/functions";
import Option from '../Option/index';

export default class Select extends Component {
    constructor(props) {
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
            <select name={this.props.name} onChange={this.inputOnChange}>
                <Option value='Arial'/>
                <Option value='Arial Black' />
                <Option value='Courier New' />
                <Option value='Impact' />
                <Option value='Comic Sans MS' />
                <Option selected='selected' value='Helvetica' />
                <Option value='Trebuchet MS' />
                <Option value='Verdana' />
                <Option value='Georgia' />
                <Option value='Tahoma' />
            </select>
        );
    }
}

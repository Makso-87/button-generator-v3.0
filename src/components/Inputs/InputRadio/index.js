import React, {Component} from 'react';
import {change} from "../../../functions/functions";

export default class InputRadio extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'option1'
        }

        this.inputOnChange = this.inputOnChange.bind(this);
    }

    inputOnChange(event){
        change();
        const val = event.target.value;
        this.setState({value: val});
    }

    render(){
        return(
            <tr>
            <td>
                <input className='radio'
                       name='hover'
                       type='radio'
                       value='option1'
                       checked={this.state.value == 'option1'}
                       onChange={this.inputOnChange}/>
                <label>Сплошной фон</label>
             </td>
             <td>
                 <input className='radio'
                        name='hover'
                        type='radio'
                        value='option2'
                        checked={this.state.value == 'option2'}
                        onChange={this.inputOnChange}/>
                 <label>Градиент</label>
            </td>
            </tr>
        );
    }
}

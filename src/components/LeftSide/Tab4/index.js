import React, {Component} from 'react';
import OpenTab from '../../OpenTab';
import Input from "../../Inputs/Input";
import InputRadio from "../../Inputs/InputRadio";

export default class Tab4 extends Component {
    render(){
        return(
            <div>
                <OpenTab name=' Эффект наведения' index={3} />
                <div className='tab'>
                    <form name='form4' action='#' method='post'>
                        <table>

                            <InputRadio/>

                            <tr>
                                <td>
                                    <label>Цвет</label>
                                    <Input name='hover_color' type='color' value='#0080ff'/>
                                        <Input id='hov_1' type='text'/>
                                </td>
                                <td>
                                    <label>Цвет 1</label>
                                    <Input name='hover_grad_col_1' type='color' value='#8000ff'/>
                                        <Input id='hov_2' type='text'/>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <label>Цвет 2</label>
                                    <Input name='hover_grad_col_2' type='color' value='#0080ff'/>
                                        <Input id='hov_3' type='text'/>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        );
    };
}

import React, {Component} from 'react';
import OpenTab from '../../OpenTab';
import Input from '../../Inputs/Input';
import InputCheck from "../../Inputs/InputCheck";

export default class Tab3 extends Component {
    render(){
        return(
            <div>
                <OpenTab name=' Дополнительные параметры' index={2} />
                <div className='tab'>
                    <form name='form3' action='#' method='post'>
                        <table>
                            <tr>
                                <td>
                                    <label for='border'>Рамка</label>
                                    <InputCheck id='1' name='border' type='checkbox'/>
                                </td>
                                <td>
                                    <label for='border_color'>Цвет рамки</label>
                                    <Input name='border_color' type='color' value='#000000'/>
                                </td>
                                <td><Input id='prop_6' type='text'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label for='brd_width'>Ширина рамки</label>
                                </td>
                                <td>
                                    <Input name='brd_width' type='range' max='10' min='1' step='1' value='2'/>
                                </td>
                                <td><Input id='prop_1' type='text'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label for='shadow'>Тень</label>
                                    <InputCheck id='2' name='shadow' type='checkbox' checked={true}/>
                                </td>

                                <td>
                                    <label for='shadow_color'>Цвет тени рамки</label>
                                    <Input name='shadow_color' type='color' value='#000000'/>
                                </td>
                                <td><Input id='prop_7' type='text'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label for='sh_x'>Смещение тени по оси Х</label>
                                </td>
                                <td>
                                    <Input name='sh_x' type='range' max='10' min='-10' step='1' value='0'/>
                                </td>
                                <td><Input id='prop_2' type='text'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label for='sh_y'>Смещение тени по оси Y</label>
                                </td>
                                <td>
                                    <Input name='sh_y' type='range' max='10' min='-10' step='1' value='1'/>
                                </td>
                                <td><Input id='prop_3' type='text'/></td>
                            </tr>
                            <tr>
                                <td><label for='sh_blur'>Размытие тени</label></td>
                                <td><Input name='sh_blur' type='range' max='10' min='0' step='1' value='1'/></td>
                                <td><Input id='prop_4' type='text'/></td>
                            </tr>
                            <tr>
                                <td><label for='sh_strach'>Растяжение тени</label></td>
                                <td><Input name='sh_strach' type='range' max='10' min='0' step='1' value='1'/></td>
                                <td><Input id='prop_5' type='text'/></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        );
    };
}

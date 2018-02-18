import React, {Component} from 'react';
import OpenTab from '../../OpenTab';
import Input from "../../Inputs/Input";
import Select from "../../Inputs/Select";
import InputCheck from "../../Inputs/InputCheck";

export default class Tab2 extends Component {
    render(){
        return(
            <div>
                <OpenTab name=' Параметры текста' index={1} />
                <div className='tab'>
                    <form name='form2' action='#' method='post'>
                        <table>
                            <tr>
                                <td>
                                    <label for='fontset'>Шрифт</label>
                                    <Select name='fontset'/>
                                </td>
                                <td>Размер шрифта</td>
                                <td />
                            </tr>
                            <tr>
                                <td>
                                    <label for='text'>Текст</label>
                                    <Input id='text_6' name='text' type='text' value='Кнопка'/>
                                </td>
                                <td>
                                    <table className='minitable'>
                                        <tr>
                                            <td><label for='font'>Цвет текста</label></td>
                                            <td><Input name='font' type='color' value='#004040'/></td>
                                        </tr>
                                    </table>


                                </td>
                                <td><Input id='text_4' type='text'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='text_shadow'>Тень текста</label>
                                    <InputCheck id='4' name='text_shadow' type='checkbox' checked={true}/>
                                </td>
                                <td>
                                    <table className='minitable'>
                                        <tr>
                                            <td><label for='text_shadow_color'>Цвет тени текста</label></td>
                                            <td><Input name='text_shadow_color' type='color' value='#c0c0c0'/></td>
                                        </tr>
                                    </table>
                                </td>
                                <td><Input id='text_5' type='text'/></td>
                            </tr>
                            <tr>
                                <td><label for='tsh_x'>Смещение тени по оси Х</label></td>
                                <td><Input name='tsh_x' type='range' max='10' min='-10' step='1' value='0'/></td>
                                <td><Input id='text_1' type='text'/></td>
                            </tr>
                            <tr>
                                <td><label for='tsh_y'>Смещение тени по оси Y</label></td>
                                <td><Input name='tsh_y' type='range' max='10' min='-10' step='1' value='1'/></td>
                                <td><Input id='text_2' type='text'/></td>
                            </tr>
                            <tr>
                                <td><label for='tsh_blur'>Размытие тени</label></td>
                                <td><Input name='tsh_blur' type='range' max='10' min='0' step='1' value='1'/></td>
                                <td><Input id='text_3' type='text'/></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        );
    };
}

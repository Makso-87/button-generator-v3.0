import React, {Component} from 'react';
import OpenTab from '../../OpenTab';
import Input from "../../Inputs/Input";
import InputCheck from "../../Inputs/InputCheck";

export default class Tab1 extends Component {
    render(){
        return(
            <div>
                <OpenTab name=' Основные параметры' index={0} />
                <div className='tab'>
                    <form name='form1' action='#' method='post'>
                        <table>
                            <tr>
                                <td>
                                    <label for='bg'>Цвет фона</label>
                                    <Input name='bg' type='color' value='#8080ff' />
                                </td>
                                <td><Input id='main_4' type='text' /></td>
                                <td />
                            </tr>
                            <tr>
                                <td><label for='width'>Ширина кнопки</label></td>
                                <td><Input name='width' type='range' max='100' min='10' step='1' value='20'/></td>
                                <td><Input id='main_1' type='text' /></td>
                            </tr>
                            <tr>
                                <td><label for='height'>Высота кнопки</label></td>
                                <td><Input name='height' type='range' max='40' min='5' step='1' value='10'/></td>
                                <td><Input id='main_2' type='text' /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label for='radius'>Скругление углов</label>
                                    <InputCheck id='3' name='radius' type='checkbox' checked={true} />
                                </td>
                                <td><Input name='rad' type='range' max='50' min='1' step='1' value='25'/></td>
                                <td><Input id='main_3' type='text' /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        );
    };
}

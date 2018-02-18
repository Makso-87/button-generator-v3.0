import React, {Component} from 'react';
import {preview, codeField, clipboard} from "../RightSide";
import './style.less';
import './style-responsive.less';
import Tab1 from "../LeftSide/Tab1";
import Tab2 from "../LeftSide/Tab2";
import Tab3 from "../LeftSide/Tab3";
import Tab4 from "../LeftSide/Tab4";
import {prevData, Default, change, output, startDataInputText} from "../../functions/functions";
import ButtonClipBoard from "../ButtonClipBoard";

export default class App extends Component {

    componentDidMount(){
        prevData();
        change();
        Default();
        output();
        change();
        startDataInputText();
    }

    render(){
        return(
          <div className='content'>
              <div className="row">
                  <div className="cols col-6">
                      <h2>Настройки параметров кнопки</h2>
                      <div className="block">
                          <Tab1/>
                          <Tab2/>
                          <Tab3/>
                          <Tab4/>
                      </div>
                  </div>
                  <div className="cols col-6">
                      {preview}
                      {codeField}
                      <ButtonClipBoard />
                  </div>
              </div>
          </div>
        );
    }
}

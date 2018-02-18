import React, {Component} from 'react';
import {clipBoard} from '../../functions/functions';
export default class ButtonClipBoard extends Component {
    constructor(props){
        super(props);
        this.onClickClip =  this.onClickClip.bind(this);
    }

    onClickClip(){
        clipBoard();
    }

    render(){
        return(
            <div>
                <div className='buff'><a className='clipboard' href='#' onClick={this.onClickClip}>Копировать в буфер</a></div>
                <div id='cont_right' />
            </div>
        );
    }
}

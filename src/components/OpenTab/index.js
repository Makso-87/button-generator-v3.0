import React, {Component} from 'react';

export default class OpenTab extends Component{

    constructor(){
        super();
        this.slideOnClick = this.slideOnClick.bind(this);
    }

    slideOnClick(){
        const cross = document.querySelectorAll('.cross'); //Получаем коллекцию элементов с классом .cross
        const par = document.querySelectorAll('.tab'); //Получаем коллекцию элементов с классом .tab
        const link = document.querySelectorAll('.bar'); //Получаем коллекцию элементов с классом .bar
        let {index} = this.props;
        let index2 = index;
        let height = par[index].clientHeight;
        if(height == 0) {
            /*Разворачиваем этот блок*/
            par[index].style.transition = 'All 0.5s';
            if(index == 0) par[index].style.height = '160px';
            if(index == 1) par[index].style.height = '220px';
            if(index == 2) par[index].style.height = '260px';
            if(index == 3) par[index].style.height = '130px';
            par[index].style.paddingTop = '10px';
            par[index].style.paddingBottom = '10px';
            link[index].className += ' active';
            cross[index].style.transition = 'all 0.5s';
            cross[index].style.transform = 'rotate(270deg)';
            /*Сворачиваем блок2*/
            switch(index){
                case 0:
                    index2 = 1;
                    break;
                case 1:
                    index2 = 2;
                    break;
                case 2:
                    index2 = 3;
                    break;
                case 3:
                    index2 = 0;
                    break;
                default: index2 = 0;
            }
            par[index2].style.height = '0px';
            par[index2].style.paddingTop = '0px';
            par[index2].style.paddingBottom = '0px';
            link[index2].className = 'bar';
            cross[index2].style.transform = 'rotate(45deg)';
            /*Сворачиваем блок3*/
            switch(index2){
                case 0:
                    index2 = 1;
                    break;
                case 1:
                    index2 = 2;
                    break;
                case 2:
                    index2 = 3;
                    break;
                case 3:
                    index2 = 0;
                    break;
            }
            par[index2].style.height = '0px';
            par[index2].style.paddingTop = '0px';
            par[index2].style.paddingBottom = '0px';
            link[index2].className = 'bar';
            cross[index2].style.transform = 'rotate(45deg)';
            /*Сворачиваем блок4*/
            switch(index2){
                case 0:
                    index2 = 1;
                    break;
                case 1:
                    index2 = 2;
                    break;
                case 2:
                    index2 = 3;
                    break;
                case 3:
                    index2 = 0;
                    break;
            }
            par[index2].style.paddingTop = '0px';
            par[index2].style.paddingBottom = '0px';
            par[index2].style.height = '0px';
            link[index2].className = 'bar';
            cross[index2].style.transform = 'rotate(45deg)';
            switch (index) {
                case 0:
                    this.setState({count: [1,0,0,0]});
                    break;
                case 1:
                    this.setState({count: [0,1,0,0]});
                    break;
                case 2:
                    this.setState({count: [0,0,1,0]});
                    break;
                case 3:
                    this.setState({count: [0,0,0,1]});
                    break;
            }

        }
        else {
            par[index].style.height = '0px';
            par[index].style.paddingTop = '0px';
            par[index].style.paddingBottom = '0px';
            link[index].className = 'bar';
            cross[index].style.transform = 'rotate(45deg)';
        }
    }

    render() {
        return(
                <a className='bar'  href='#' onClick={this.slideOnClick}><span className='cross'>&#10006;</span><span>{this.props.name}</span></a>
        );
    }
}

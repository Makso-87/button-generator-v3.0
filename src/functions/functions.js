import React from 'react';
/*Объявляем глобальные переменные*/

let text1;
let bg_color;
let font_color;
let font1;
let border_color;
let shadow_color;
let width;
let height;
let text_shadow_color;
let hoverbg;
let hovergradcol1;
let hovergradcol2;
let padding_vertical;
let padding_horizontal;
let font_s;
let font_fam;
let border_width;
let sh_x;
let sh_y;
let sh_blur;
let sh_strach;
let rad;
let tsh_x;
let tsh_y;
let tsh_blur;

export function prevData() {
    text1 =  document.querySelector("[name='text']").value;
    bg_color = document.querySelector("[name='bg']").value;
    font_color = document.querySelector("[name='font']").value;
    border_color = document.querySelector("[name='border_color']").value;
    shadow_color = document.querySelector("[name='shadow_color']").value;
    width = document.querySelector("[name='width']").value;
    height = document.querySelector("[name='height']").value;
    text_shadow_color = document.querySelector("[name='text_shadow_color']").value;
    hoverbg = document.querySelector("[name='hover_color']").value;
    hovergradcol1 = document.querySelector("[name='hover_grad_col_1']").value;
    hovergradcol2 = document.querySelector("[name='hover_grad_col_2']").value;
}

/*Aeyrwbz eстанавливаем необходимые значения поля вывода информации (элементы input type="text")*/
export function startDataInputText() {

    document.querySelector("#main_4").value = bg_color;
    document.querySelector("#text_4").value = font_color;
    document.querySelector("#text_5").value = text_shadow_color;
    document.querySelector("#prop_6").value = border_color;
    document.querySelector("#prop_7").value = shadow_color;
}

/*Функция устанавливает начальные значения кнопки*/

export function Default (){
    let button = document.querySelector('.custom');
    button.style.padding = '10px 20px';
    button.style.backgroundColor = bg_color;
    button.style.textDecoration = 'none';
    button.style.color = font_color;
    button.style.fontSize = '1.3em';
    button.style.fontFamily = font1;
    button.innerHTML = text1;
    let dim = document.querySelector('.custom');
    let w = dim.offsetWidth;
    let h = dim.offsetHeight;
    document.querySelector('#main_1').value = w;
    document.querySelector('#main_2').value = h;
}

/*Функция изменяет текст внутри поля кнопки*/ 

export function text(){
	document.querySelector('.custom').innerHTML = text1;
}

/*Функция устанавливает семейство шрифта*/ 

export function font(){
	let val = document.querySelectorAll('option');
	let el = document.querySelector('#sp6');
	for (let i = 0; i < val.length; i++) {
		if (val[i].selected) {
			font1 = val[i].value;
			break;
		}
	}
	
	document.querySelector('.custom').style.fontFamily = font1;
	/*Проверяем есть ли элемент span с id sp6 */
	if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp6');
			el.innerHTML = `font-family: "${font1}";<br>`;
		}
		else {
			el.innerHTML = `font-family: "${font1}";<br>`;
		}
}

/*Функция устанавливает цвет текста кнопки*/

export function button(){
	document.querySelector('.custom').style.color = font_color;
	document.querySelector('#text_4').value = font_color;
}

/*Функция устанавливает цвет фона кнопки*/

export function backgroundColor(){
	document.querySelector('.custom').style.backgroundColor = bg_color;
	document.querySelector('#main_4').value = bg_color;
}

/*Функция устанавливает рамку кнопки*/

export function border(){
	let bord =  document.getElementById('1');
	let el = document.querySelector('#sp1');
	/*Проверяем стоит ли флажок "Рамка*/
	if(bord.checked) {
		document.querySelector('.custom').style.border = `${border_width}px solid ${border_color}`;
		document.querySelector('#prop_1').value = border_width;
		/*Проверяем есть ли элемент span с id sp1 */
		if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp1');
			el.innerHTML = `border: ${border_width}px solid ${border_color};<br>`;
		}
		else{
			el.innerHTML = `border: ${border_width}px solid ${border_color};<br>`;
		}	
	}
	else 
		{
			document.querySelector('.custom').style.border = 'none';
			if(el != null)document.querySelector('.source1').removeChild(el);
		}
		document.querySelector('#prop_6').value = border_color;
}

/*Функция устанавливает тень кнопки*/

export function shadow(){
	let bord =  document.getElementById('2');
	let el = document.querySelector('#sp2');
	/*Проверяем стоит ли флажок "Тень"*/
	if(bord.checked) {
		document.querySelector('.custom').style.boxShadow = `${sh_x}px ${sh_y}px ${sh_blur}px ${sh_strach}px ${shadow_color}`;
		document.querySelector('#prop_2').value = sh_x;
		document.querySelector('#prop_3').value = sh_y;
		document.querySelector('#prop_4').value = sh_blur;
		document.querySelector('#prop_5').value = sh_strach;
		/*Проверяем есть ли элемент span с id sp2 */
		if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp2');
			el.innerHTML = `box-shadow: ${sh_x}px ${sh_y}px ${sh_blur}px ${sh_strach}px ${shadow_color};<br>`;
		}
		else {
			el.innerHTML = `box-shadow: ${sh_x}px ${sh_y}px ${sh_blur}px ${sh_strach}px ${shadow_color};<br>`;
		}
		
	}
	else {
		document.querySelector('.custom').style.boxShadow = 'none';
		if(el != null)document.querySelector('.source1').removeChild(el);
	}
	document.querySelector('#prop_7').value = shadow_color;
}

/*Функция устанавливает тень кнопки*/

export function textShadow(){
	let bord =  document.getElementById('4');
	let el = document.querySelector('#sp3');
	/*Проверяем стоит ли флажок "Тень текста*/
	if(bord.checked) {
		document.querySelector('.custom').style.textShadow = `${tsh_x}px ${tsh_y}px ${tsh_blur}px ${text_shadow_color}`;
		document.querySelector('#text_1').value = tsh_x;
		document.querySelector('#text_2').value = tsh_y;
		document.querySelector('#text_3').value = tsh_blur;
		/*Проверяем есть ли элемент span с id sp3 */
		if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp3');
			el.innerHTML = `text-shadow: ${tsh_x}px ${tsh_y}px ${tsh_blur}px ${text_shadow_color};<br>`;
		}
		else {
			el.innerHTML = `text-shadow: ${tsh_x}px ${tsh_y}px ${tsh_blur}px ${text_shadow_color};<br>`;
		}
	}
	else {
		document.querySelector('.custom').style.textShadow = 'none';
		if(el != null) document.querySelector('.source1').removeChild(el);
	}
	document.querySelector('#text_5').value = text_shadow_color;
}

/*Функция устанавливает ширину и высоту кнопки*/

export function dimentionButton(){
	let dim = document.querySelector('.custom');
	dim.style.padding =  `${height}px ${width}px`;
	let w = dim.offsetWidth;
	let h = dim.offsetHeight;
	document.querySelector('#main_1').value = w;
	document.querySelector('#main_2').value = h;
}

/*Функция устанавливает скругление углов кнопки*/

export function radius(){
	let bord =  document.getElementById('3');
	let el = document.querySelector('#sp4');
	/*Проверяем стоит ли флажок "Скругление углов*/
	if(bord.checked) {
		document.querySelector('.custom').style.borderRadius = rad + "px ";
		document.querySelector('#main_3').value = rad;
		/*Проверяем есть ли элемент span с id sp4*/
		if(el === null){
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp4');
			el.innerHTML = `border-radius: ${rad}px;<br>
							-moz-border-radius: ${rad}px;<br>
							-webkit-border-radius: ${rad}px;<br>`;
			
		}
		else {
			el.innerHTML = `border-radius: ${rad}px;<br>
							-moz-border-radius: ${rad}px;<br>
							-webkit-border-radius: ${rad}px;<br>`;
		} 
	}
	else {
		document.querySelector(".custom").style.borderRadius = "0px";
		if(el != null) document.querySelector('.source1').removeChild(el);
	}
}

/*Функция отвечает за эффект hover у кнопки*/

export function hover(){
	let bord = document.querySelectorAll('[name="hover"]');
	let el = document.querySelector('#sp5');
		/*Проверяем выбран ли флажок "Сплошной фон"*/
		if(bord[0].checked) {
			let but = document.querySelector('.custom');
			but.addEventListener('mouseover', function(){
				but.style.background = hoverbg;
			});
			but.addEventListener('mouseout', function(){
				but.style.background = bg_color;
			});
			/*Проверяем есть ли элемент span с id sp5 */
			if(el === null){
			el = document.createElement('span');
				document.querySelector('.source2').appendChild(el);
				el.setAttribute('id', 'sp5');
				el.innerHTML = `.button:hover {<br>background: ${hoverbg};`;
			}
			else {
				el.innerHTML = `.button:hover {<br>background: ${hoverbg};`;
			}
			document.querySelector('#hov_1').value = hoverbg;
		}
		else{
			let but = document.querySelector('.custom');
			but.addEventListener('mouseover', function(){
				but.style.background = `linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2})`;
			});
			but.addEventListener('mouseout', function(){
				but.style.background = bg_color;
			});
			/*Проверяем есть ли элемент span с id sp5 */
			if(el === null){
			el = document.createElemnt('span');
			document.querySelector('.source2').appendChild(el);
			el.setAttribute('id', 'sp5');
			el.innerHTML = `.button:hover {<br> background: linear-gradient(to top, ${hovergradcol1},  ${hovergradcol2});<br>
												background: -o-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												background: -ms-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												background: -moz-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												background: -webkit-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>`;
			}
			else {
				el.innerHTML = `.button:hover {<br> background: linear-gradient(to top, ${hovergradcol1},  ${hovergradcol2});<br>
												    background: -o-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												    background: -ms-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												    background: -moz-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												    background: -webkit-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>`;
			}
			document.querySelector('#hov_2').value = hovergradcol1;
			document.querySelector('#hov_3').value = hovergradcol2;
		}

}

/*Функция выводит готовый код кнопки в окно для копирования пользователем*/

export function output(){
			document.querySelector('.source').innerHTML = `.button {<br>
														color: ${font_color};<br> 
														background-color: ${bg_color};<br>
														padding: ${height}px ${width}px;<br>
														text-decoration: none;<br>
														font-size: 1.3em;<br>`;

		}

/*Данная вызывает функции установки параметров при именении любого значения любого элемента формы*/

export function change(){
	text1 =  document.querySelector("[name='text']").value;
	font_color = document.querySelector("[name='font']").value;
	bg_color = document.querySelector("[name='bg']").value;
	border_color = document.querySelector("[name='border_color']").value;
	shadow_color = document.querySelector("[name='shadow_color']").value;
	border_width = document.querySelector("[name='brd_width']").value;
	sh_x = document.querySelector("[name='sh_x']").value;
	sh_y = document.querySelector("[name='sh_y']").value;
	sh_blur = document.querySelector("[name='sh_blur']").value;
	sh_strach = document.querySelector("[name='sh_strach']").value;
	rad = document.querySelector("[name='rad']").value;
	tsh_x = document.querySelector("[name='tsh_x']").value;
	tsh_y = document.querySelector("[name='tsh_y']").value;
	tsh_blur = document.querySelector("[name='tsh_blur']").value;
	text_shadow_color = document.querySelector("[name='text_shadow_color']").value;
	width = document.querySelector("[name='width']").value;
	height = document.querySelector("[name='height']").value;
	hoverbg = document.querySelector("[name='hover_color']").value;
	hovergradcol1 = document.querySelector("[name='hover_grad_col_1']").value;
	hovergradcol2 = document.querySelector("[name='hover_grad_col_2']").value;
	output();
	button();
	backgroundColor();
	border();
	shadow();
	radius();
	textShadow();
	dimentionButton();
	hover();
	text();
	font();
}

/*Функция копирует в буфер сгенерированный код кнопки*/

export function clipBoard(){
	/*нашли наш контейнер*/
	let cont = document.getElementById('container');
	/*производим его выделение*/
	let range = document.createRange();
	range.selectNode(cont); 
	window.getSelection().addRange(range); 
	/*пытаемся скопировать текст в буфер обмена*/
	try { 
	    document.execCommand('copy'); 
	    let parent = document.getElementById('cont_right');
	    let el = document.createElement('span');
	    let chil = parent.childNodes;
	    /*Проверяем есть ли уже элемент span*/
	    if(chil.length < 1) {
	  	parent.appendChild(el);
	  }
	  el.innerHTML = '';
	  el.innerHTML = 'Код успешно скопирован!';
	  el.style.position = 'relative';
	  el.style.display = 'inline-block';
	  el.style.top = '10px';
	  el.style.opacity = '0';
	  el.style.border = '1px solid';
	  el.style.padding = '10px 20px';
	  el.style.borderRadius = '20px';
	  el.style.marginBottom = '30px';
	  el.className = 'anim_output';
	} catch(err) { 
	  console.log('Can`t copy, boss'); 
	} 
	/*очистим выделение текста, чтобы пользователь "не парился"*/
	window.getSelection().removeAllRanges();
}


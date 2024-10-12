import '../style/style.css';

import { trocarTema,copy, BntCopY } from "./eventos.js"
import calculete from "./function.js"
import { cBnt, tecKey } from "./teclado.js"
import {main,root,input,resultinput} from "./variaveis.js"

//Função para que as teclas funcionem em conjunto como o mouse

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', cBnt)
})

//-----------

document.getElementById('clear').addEventListener('click', copy)

document.getElementById('equal').addEventListener('click', calculete)


//Função que detecta o evento quando uma tecla for acionada no teclado e verifica se a tecla selecionada esta dentro do array se tiver a tecla ira aparecer dentro do input

input.addEventListener('keydown', tecKey)


//Mostrar e copiar o resultado da calculadora

document.getElementById('copyToClipboard').addEventListener('click',BntCopY)

//Trocar o tema da pagina

document.getElementById('themeSwitcher').addEventListener('click',trocarTema)



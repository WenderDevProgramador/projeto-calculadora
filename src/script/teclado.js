import {main,root,input,resultinput} from "./variaveis.js"
import calculete from "./function.js"



//Valores das teclas da calculadora
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const cBnt = (ev) => { 
    const value = ev.currentTarget.dataset.value
    input.value += value
}



const tecKey = (ev) => {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (ev.key === 'Enter') {
        calculete()
    }
}



export {cBnt,tecKey}
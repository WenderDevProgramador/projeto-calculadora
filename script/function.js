import {input,resultinput} from "./variaveis.js"


//Função que calcula o resultado
function calculete() {
    resultinput.value = 'ERRO'
    resultinput.classList.add('error')
    const result = eval(input.value)
    resultinput.value = result
    resultinput.classList.remove('error')

}

export default calculete
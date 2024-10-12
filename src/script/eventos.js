import {main,root,input,resultinput} from "./variaveis.js"


const trocarTema = () => {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'

    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', ' #f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
}

const copy = () => {
    input.value = ''
    input.focus()
    const copiar = document.getElementById('copyToClipboard')
    const resuldado = document.getElementById('result')
    resuldado.value = ''
    copiar.innerText = 'Copy'
    copiar.classList.remove('success')
    resultinput.classList.remove('error')

}

const BntCopY = (ev) => {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultinput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}

export {trocarTema,copy,BntCopY}
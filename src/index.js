import './sass/main.scss';
//import debounce from 'lodash.debounce';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';


const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#input'),
    container: document.querySelector('.container'),

}

const handleSubmit = (e) => {
    e.preventDefault()
    const value = refs.input.value
    fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// const countriesItem = `
// <article>
// <img src'' alt=''/>
// <title></title>

// </article>`


refs.form.addEventListener('submit', handleSubmit)
import './sass/main.scss';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import countryItem from './templates/country-item.hbs';
import countryList from './templates/country-list.hbs';
import refs from './js/refs';
import renderCountryList from './js/render-countries'


const handleSubmit = (e) => {
    e.preventDefault()
    refs.container.innerHTML = ''
    const value = refs.input.value
    fetch(`https://restcountries.eu/rest/v2/name/${value}`)
        .then(response => response.json())
        .then(renderCountryList)
        .catch(err => console.log(err))
}
    
    
    export function renderCountryItem(country) {
    const markup = countryItem(country);
    refs.container.innerHTML = markup;
}


export function markupCountryList(countries) {
    const listMarkup = countryList(countries)
    refs.container.insertAdjacentHTML('beforeend', listMarkup)
}


refs.form.addEventListener('input', debounce(handleSubmit, 1000));
    
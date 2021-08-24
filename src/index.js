import './sass/main.scss';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import countryItem from './templates/country-item.hbs';
import countryList from './templates/country-list.hbs';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import renderCountryList from './js/render-countries.js';


const handleSubmit = (e) => {
    e.preventDefault()
    refs.container.innerHTML = ''
    const searchQuery = refs.input.value
    fetchCountries(searchQuery)
    .then(renderCountryList)
    .catch(err => console.log(err))
}

refs.form.addEventListener('input', debounce(handleSubmit, 1000));
    
    export function renderCountryItem(country) {
    const markup = countryItem(country);
    refs.container.innerHTML = markup;
}


    export function markupCountryList(countries) {
    const listMarkup = countryList(countries)
    refs.container.insertAdjacentHTML('beforeend', listMarkup)
}


    
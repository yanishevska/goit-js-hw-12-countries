import { markupCountryList } from "../index";
import { renderCountryItem } from "../index";
import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';

function renderCountryList(countries) {
    if (countries.length > 10) {
        return alert({
            text: "Too many matches found. Please enter a more specific query!",
            delay: 1500,
    }); 
    }

    if (countries.length >= 2 && countries.length <= 10) {
        markupCountryList(countries)
        return
    }
    
    if(countries.length === 1) {
        renderCountryItem(countries)
    } else if(countries.status === 404){
         error ({    
            text: 'No countries found. Please enter a more specific query',
            styling: 'brighttheme',
            delay: 2000,
        });
    }
}
export default renderCountryList;
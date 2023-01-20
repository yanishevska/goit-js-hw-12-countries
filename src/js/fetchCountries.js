export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
        .then(response => response.json())
        .catch(err => console.log(err))
}

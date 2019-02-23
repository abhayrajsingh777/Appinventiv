// Global Variables
const countriesList = document.getElementById("countries");
let countries; // will contain "fetched" data

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}


fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";

  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.alpha2Code + " +" +country.callingCodes}</option>`);

  countriesList.innerHTML = options;

  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#country-container img").src = countryData.flag;
}
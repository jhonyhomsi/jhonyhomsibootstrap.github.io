// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {
  // Get the input field and button from the DOM
  const input = document.getElementById('search-input');
  const button = document.getElementById('search-btn');

  // Add a click event listener to the button
  button.addEventListener('click', function () {
    // Get the user's input from the input field
    const inputValue = input.value;

    // Use Axios to make a GET request to the RestCountries API
    axios.get(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then(function (response) {
        // Get the country data from the response
        const country = response.data[0];

        // Create an HTML string with the country data
        const countryCard = `
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="${country.flags.png}" alt="${country.name.common}">
              <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">Capital: ${country.capital}</p>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Subregion: ${country.subregion}</p>
                <p class="card-text">Currency: ${Object.values(country.currencies)[0].name}</p>
              </div>
            </div>
          </div>
        `;

        // Get the container div for the country cards
        const container = document.getElementById('country-cards');

        // Add the country card to the container
        if (container) {
          container.innerHTML = countryCard;
        } else {
          console.error('Element with id "country-cards" not found');
        }

      })
      .catch(function (error) {
        // If there was an error, log it to the console
        console.error(error);
      });
  });
});

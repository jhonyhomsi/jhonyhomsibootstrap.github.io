// Define the API endpoint and query parameter for fetching the country data
const API_ENDPOINT = 'https://restcountries.com/v3.1/all';
const QUERY_PARAMS = '?fields=name,flags';

// Use Fetch to fetch the country data from the API endpoint
fetch(API_ENDPOINT + QUERY_PARAMS)
  .then(response => response.json())
  .then(data => {
    // Extract the country data from the response
    const countries = data;

    // Iterate over the country data and create a card for each country
    countries.forEach(country => {
      // Extract the country name and flag from the country data
      const name = country.name.common;
      const flag = country.flags.svg;
      const capital = country.capital;

      // Create a card for the country with its name and flag
      const card = `
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${flag}" class="card-img" alt="${name} flag">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <div class="card-body">
                  <a href="https://en.wikipedia.org/wiki/${name}" class="btn btn-primary" target = "_blank">Read History</a>                
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Add the card to the HTML code
      document.getElementById('country-cards').insertAdjacentHTML('beforeend', card);
    });
  })
  .catch(error => {
    console.error(error);
  });

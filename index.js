// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {
    // Get the input field and button from the DOM
    const input = document.getElementById('search-input');
    const button = document.getElementById('search-btn');
  
    // Add a click event listener to the search button
    button.addEventListener('click', function() {
      renderCards(input.value);
    });
  
    function renderCards(searchTerm) {
      // Get the country cards container from the DOM
      const container = document.getElementById('country-cards-1');
  
      // Clear the container
      container.innerHTML = '';
  
      // Make a GET request to the REST Countries API
      axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then(function(response) {
          // Check if there are any search results
          if (response.data.length === 0) {
            // Show an alert notification if no results are found
            showAlert('No search results found!');
          } else {
            // Loop through the array of country objects and create a card for each one
            response.data.forEach(function(country) {
              // Create a card element
              const card = document.createElement('div');
              card.classList.add('card', 'mb-4');
  
              // Create an image element for the flag
              const flag = document.createElement('img');
              flag.classList.add('card-img-top');
              flag.src = country.flags.svg;
  
              // Create a card body element
              const cardBody = document.createElement('div');
              cardBody.classList.add('card-body');
  
              // Create a title element for the country name
              const title = document.createElement('h5');
              title.classList.add('card-title');
              title.textContent = country.name.common;
  
              // Create a paragraph element for the country capital
              const capital = document.createElement('p');
              capital.classList.add('card-text');
              capital.textContent = `Capital: ${country.capital}`;

              const Region = document.createElement('p');
              Region.classList.add('card-text');
              Region.textContent = `Region: ${country.region.toLocaleString()}`;
  
              // Create a paragraph element for the country population
              const population = document.createElement('p');
              population.classList.add('card-text');
              population.textContent = `Population: ${country.population.toLocaleString()}`;
  
              // Create a paragraph element for the country currency
              const currency = document.createElement('p');
              currency.classList.add('card-text');
              currency.textContent = `Currency: ${Object.values(country.currencies)[0].name}`;
  
              // Append the flag, title, capital, population, and currency elements to the card body
              cardBody.appendChild(flag);
              cardBody.appendChild(title);
              cardBody.appendChild(capital);
              cardBody.appendChild(Region);
              cardBody.appendChild(population);
              cardBody.appendChild(currency);
  
              // Append the card body to the card
              card.appendChild(cardBody);
  
              // Append the card to the container
              container.appendChild(card);
            });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  
    // Add event listener to clear button to clear search input
    document.getElementById('clear-btn').addEventListener('click', function() {
      document.getElementById('search-input').value = '';
    });
  });
  
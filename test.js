$(document).ready(function() {
    // function to create card for country
    function createCountryCard(country) {
        var countryCard = '<div class="col-md-3">';
        countryCard += '<div class="card mb-4 box-shadow">';
        countryCard += '<img class="card-img-top" src="' + country.flags.png + '">';
        countryCard += '<div class="card-body">';
        countryCard += '<h5 class="card-title">' + country.name.common + '</h5>';
        countryCard += '<p class="card-text">Capital: ' + country.capital + '</p>';
        countryCard += '<p class="card-text">Region: ' + country.region + '</p>';
        countryCard += '<p class="card-text">Population: ' + country.population + '</p>';
        countryCard += '</div></div></div>';
        return countryCard;
    }

    // function to display search results
    function displaySearchResults(country) {
        var countryCards = '';
        countryCards += createCountryCard(country);
        $('#country-cards').html(countryCards);
    }

    // event listener for search button click
    $('#searchBtn').click(function() {
        var searchValue = $('#searchInput').val().toLowerCase();
        axios.get('https://restcountries.com/v3.1/name/' + searchValue + '?fullText=true')
            .then(function (response) {
                var countries = response.data;
                displaySearchResults(countries[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
});
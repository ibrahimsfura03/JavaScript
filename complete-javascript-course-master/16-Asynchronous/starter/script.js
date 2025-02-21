'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//AJAX_CALL HttpsRequest
/*
const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // Ensure the API returns an array
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} Million People</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('north korea');


*/

const renderCountry = (data, className = '') => {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} Million People</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/* const getCountryAndNeighbour = country => {
  // AJAX call counry 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // Ensure the API returns an array
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Render Neighbour country 2
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call counry 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('china');

setTimeout(() => {
  console.log('1 second passed...');
  setTimeout(() => {
    console.log('2 second passed...');
    setTimeout(() => {
      console.log('3 second passed...');
      setTimeout(() => {
        console.log('4 second passed...');
        setTimeout(() => {
          console.log('5 second passed...');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 */
const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request);

/* const getCountryData = function (counry) {
  fetch(`https://restcountries.com/v3.1/name/${counry}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0])
    });
}; */

const getCountryData = counry => {
  fetch(`https://restcountries.com/v3.1/name/${counry}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    });
};

getCountryData('portugal');

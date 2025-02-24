'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

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
const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request);
*/

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
}; 

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} `);
      renderError(`Something went wrong ¬¬ ${err.message}. Try gaain!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  };
  

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(`url`).then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(`${errMsg}, ${response.status}`);
    }

    return response.json();
  });
};

const getCountryData = country => {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No neighbour Found!`);

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} `);
      renderError(`Something went wrong ¬¬ ${err.message}. Try gaain!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('portugal');
});

////////////////////////////////////////////////////////////////////
///Prosifying

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!!!...');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win :)');
    } else {
      reject(new Error('You lost your money :('));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 1 second');
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc error')).catch(x => console.error(x));


////////////////////////////////////////////////////////////////////
///Prosifying geolocation app

const getPositon = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPositon().then(pos => console.log(pos));


  */

const whereAmI = async function (country) {
  // const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // console.log(res);

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI('Nigeria');
console.log('FIRST');

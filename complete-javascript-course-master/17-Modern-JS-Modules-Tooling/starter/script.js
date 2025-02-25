///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module
/*

import shoppingCart from './shoppingCart.js';
import add, {
  addToCart,
  totalPrice as price,
  tq,
  cart,
} from './shoppingCart.js';

addToCart('bread', 5);
console.log(price, tq);
console.log('Importing module');

console.log(cart);
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

/////////////////////////////////////////////////////////////////////////////
///await top-level code

// console.log('Statr fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

//not very clean
// lastPost.then(last => console.log(last));

//using top-level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStuck = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} orderd from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();


 */

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept;
}

// import 'core-js/stable';
import 'core-js/stable/array/find';

//pollyfinling async functions

import 'regenerator-runtime/runtime';

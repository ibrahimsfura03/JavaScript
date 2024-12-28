// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -what is temp aplitude?
// this is the subraction of max from min temp value
// How to compute max and min tempratures?
// What does a sensor error looks like?

// 2) Dividing and conquaring the problem
// Find max temprature
// Find min temprature
// Subtract min form max value
// Return the result as the amplitude
// If sensor error return --BREAK--

const tempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const mainTemp = temps[i];
    if (typeof mainTemp !== "number") continue;
    if (mainTemp > max) max = mainTemp;
    if (mainTemp < min) min = mainTemp;
  }
  return max - min;
};

const amplitude = tempAmplitude(tempratures);
console.log(amplitude);

////////////////////////////////////////////////////////

const measureKelivin = () => {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C) FIX
    value: Number(prompt("Degree Celcius")),
  };

  // B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelivin());


*/

////////////////////////////////////////////////////////////
const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const tempAmplitude = (temps) => {
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const mainTemp = temps[i];
    if (typeof mainTemp !== "number") continue;
    // debugger;
    if (mainTemp > max) max = mainTemp;
    if (mainTemp < min) min = mainTemp;
  }
  return max - min;
};

const amplitude = tempAmplitude(tempratures);
console.log(amplitude);

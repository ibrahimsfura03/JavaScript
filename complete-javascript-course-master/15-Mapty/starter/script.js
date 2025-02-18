'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const workoutEdit = document.querySelector('.workout__btn--edit');
const workoutDelete = document.querySelector('.workout__btn--delete');

class workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()} `;
  }

  click() {
    this.clicks++;
  }
}

class Running extends workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new running([39, -12], 5.2, 24, 178);
// const cycling1 = new cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

//Application Architecture
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    //get position
    this._getPosition();

    //get data from local storage
    this._getLocalStorage();

    //attach form data to map
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert('could not get your location!');
      });
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    this.#map = L.map('map').setView([latitude, longitude], this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      inputCadence.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //Add new object to workout array
    this.#workouts.push(workout);

    //render the workout on map as maker

    inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      inputCadence.value =
        '';
    //Display the marker
    this._renderWorkoutMarker(workout);

    //Render workouts on lists
    this._renderWorkout(workout);

    //Hide form
    this._hideForm();

    //store workouts to local storage
    this._setLocalStorage();

    //Delete workout
    this._deleteWorkout();
  }

  _deleteWorkout(id) {
    // Update the workouts array by removing the workout with the matching ID
    this.#workouts = this.#workouts.filter(work => work.id !== id);

    // Update local storage with the new array
    this._setLocalStorage();

    // Optionally, remove the workout from the UI
    const workoutEl = document.querySelector(`[data-id="${id}"]`);
    if (workoutEl) workoutEl.remove();
  }

  _openEditForm(workout) {
    const form = document.querySelector('.edit-form');

    // Fill the form fields with the current workout data
    form.querySelector('input[name="description"]').value = workout.description;
    form.querySelector('input[name="distance"]').value = workout.distance;
    form.querySelector('input[name="duration"]').value = workout.duration;

    if (workout.type === 'running') {
      form.querySelector('input[name="pace"]').value = workout.pace;
      form.querySelector('input[name="cadence"]').value = workout.cadence;
    } else if (workout.type === 'cycling') {
      form.querySelector('input[name="speed"]').value = workout.speed;
      form.querySelector('input[name="elevationGain"]').value =
        workout.elevationGain;
    }

    // Store the workout id in the form for later use
    form.querySelector('[name="id"]').value = workout.id;

    // Show the edit form
    form.style.display = 'block';
  }

  _saveEditedWorkout() {
    const form = document.querySelector('.edit-form');

    // Get the updated data from the form
    const id = form.querySelector('[name="id"]').value;
    const description = form.querySelector('[name="description"]').value;
    const distance = form.querySelector('[name="distance"]').value;
    const duration = form.querySelector('[name="duration"]').value;
    const pace = form.querySelector('[name="pace"]').value;
    const cadence = form.querySelector('[name="cadence"]').value;
    const speed = form.querySelector('[name="speed"]').value;
    const elevationGain = form.querySelector('[name="elevationGain"]').value;

    // Find the workout to update
    const workout = this.#workouts.find(work => work.id === id);

    // Update the workout object
    workout.description = description;
    workout.distance = distance;
    workout.duration = duration;

    if (workout.type === 'running') {
      workout.pace = pace;
      workout.cadence = cadence;
    } else if (workout.type === 'cycling') {
      workout.speed = speed;
      workout.elevationGain = elevationGain;
    }

    // Save the updated workout to localStorage
    this._setLocalStorage();

    // Re-render the workouts list
    document.querySelector('.workouts').innerHTML = '';
    this.#workouts.forEach(work => this._renderWorkout(work));

    // Hide the edit form
    form.style.display = 'none';
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <div class="workout__header">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__actions">
            <button class="workout__btn workout__btn--edit">Edit</button>
            <button class="workout__btn workout__btn--delete">Delete</button>
          </div>
        </div>
  
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      `;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      `;
    }

    html += `</li>`;
    document.querySelector('.workouts').insertAdjacentHTML('beforeend', html);

    // Add event listener for the delete button
    const deleteBtn = document.querySelector(
      `[data-id="${workout.id}"] .workout__btn--delete`
    );
    deleteBtn.addEventListener('click', () => this._deleteWorkout(workout.id));

    // Add event listener for the edit button
    const editBtn = document.querySelector(
      `[data-id="${workout.id}"] .workout__btn--edit`
    );
    editBtn.addEventListener('click', () => this._openEditForm(workout));
  }

  _openEditForm(workout) {
    const form = document.querySelector('.edit-form');

    // Fill the form fields with the current workout data
    form.querySelector('input[name="description"]').value = workout.description;
    form.querySelector('input[name="distance"]').value = workout.distance;
    form.querySelector('input[name="duration"]').value = workout.duration;

    // Set the workout type (running or cycling)
    form.querySelector('select[name="type"]').value = workout.type;

    if (workout.type === 'running') {
      form.querySelector('input[name="cadence"]').value = workout.cadence;
      form.querySelector('input[name="elevationGain"]').value = ''; // Clear elevation for running
    } else if (workout.type === 'cycling') {
      form.querySelector('input[name="elevationGain"]').value =
        workout.elevationGain;
      form.querySelector('input[name="cadence"]').value = ''; // Clear cadence for cycling
    }

    // Store the workout id in the form for later use
    form.querySelector('[name="id"]').value = workout.id;

    // Show the edit form
    form.style.display = 'block';
  }

  _saveEditedWorkout() {
    const form = document.querySelector('.edit-form');

    // Get the updated data from the form
    const id = form.querySelector('[name="id"]').value;
    const description = form.querySelector('[name="description"]').value;
    const distance = form.querySelector('[name="distance"]').value;
    const duration = form.querySelector('[name="duration"]').value;
    const cadence = form.querySelector('[name="cadence"]').value;
    const elevationGain = form.querySelector('[name="elevationGain"]').value;
    const type = form.querySelector('[name="type"]').value;

    // Find the workout to update
    const workout = this.#workouts.find(work => work.id === id);

    // Update the workout object
    workout.description = description;
    workout.distance = distance;
    workout.duration = duration;
    workout.type = type;

    if (workout.type === 'running') {
      workout.cadence = cadence;
      workout.elevationGain = ''; // No elevation for running
    } else if (workout.type === 'cycling') {
      workout.elevationGain = elevationGain;
      workout.cadence = ''; // No cadence for cycling
    }

    // Save the updated workout to localStorage (or your state)
    this._setLocalStorage();

    // Re-render the workouts list
    document.querySelector('.workouts').innerHTML = '';
    this.#workouts.forEach(work => this._renderWorkout(work));

    // Hide the edit form
    form.style.display = 'none';
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pin: {
        duration: 1,
      },
    });

    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

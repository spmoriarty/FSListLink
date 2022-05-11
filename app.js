// import functions and grab DOM elements


import { waterFalls } from './data.js';



// let state


const water = document.getElementById('water');
for (let fall of waterFalls) {
    const a = document.createElement('a');
    a.href = `./falls/?id=${fall.name}`;

    const li = document.createElement('li');
    const imgEl = document.createElement('img');
    imgEl.src = `${fall.picture}`;
    a.append(li, imgEl);
    water.append(a);
    
}
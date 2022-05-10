// import functions and grab DOM elements
import { renderFalls } from './util.js';
import { findById } from './util.js';
import { waterFalls } from './data.js';



// let state


const water = document.getElementById('water');
for (let fall of waterFalls) {
    const a = document.createElement('a');
    a.href = `./falls/?id=${fall.name}`;

    const li = document.createElement('li');
    li.textContent = fall.picture;
    a.append(li);
    water.append(a);
    
}
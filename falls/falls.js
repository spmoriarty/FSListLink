import { renderFalls } from '../util.js';
import { findById } from '../util.js';
import { waterFalls } from '../data.js';

const params = new URLSearchParams(window.location.search);
const fall = findById(params.get('id'), waterFalls);
console.log(fall);

// const fallsDiv = document.createElement('div');
// const main = document.getElementById('fall');
// const img = document.getElementById('displayFalls');
// const info = document.getElementById('info');
// console.log(falls);

// main.textContent = `${falls.name}`;
// img.src = `../assets/${falls.picture}.jpeg`;


const water = document.getElementById('water');
const p = document.createElement('p');
p.textContent = fall.name;

water.append(p);
// for (let fall of waterFalls) {
//     const li = renderFalls(fall);
//     water.append(li);
    
// }

    

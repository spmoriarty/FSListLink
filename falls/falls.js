
import { findById } from '../util.js';
import { waterFalls } from '../data.js';

const params = new URLSearchParams(window.location.search);
const fall = findById(params.get('id'), waterFalls);


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


const imgEl = document.createElement('img');
imgEl.src = `${fall.picture}`;


const info = document.createElement('p');
info.textContent = `${fall.name} is ${fall.height} tall and is ${fall.distance} from Portland Oregon`;
    

water.append(p, imgEl, info);

// may simplify app.js
// for (let fall of waterFalls) {
//     const li = renderFalls(fall);
//     water.append(li);
    
// }

    

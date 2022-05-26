// import functions and grab DOM elements


import { fetchFalls, renderFalls } from './fetch-utils.js';
//fetch for onload function. getAll();


// let state


const waterFalls = document.getElementById('water');
for (let fall of waterFalls) {
    const a = document.createElement('a');
    a.href = `./falls/?id=${fall.name}`;

    const li = document.createElement('li');
    const imgEl = document.createElement('img');
    imgEl.src = `../assets/${fall.picture}.jpeg`; //  wahkeena' --> temp literal with ../assets/${}.jpeg in frontend
    a.append(li, imgEl);
    water.append(a);
    
}
// import functions and grab DOM elements


import { fetchFalls } from './fetch-utils.js';
import { renderFalls } from './util.js';
//fetch for onload function. getAll();

const fallDisplay = document.getElementById('fallsPic');
// let state
async function loadFalls() {
    const waterFalls = await fetchFalls();

    
    for (let fall of waterFalls) {
        
        
        const waterFall = renderFalls(fall);
        console.log(waterFall);
        fallDisplay.append(waterFall);

    // const a = document.createElement('a');
    // a.href = `./falls/?id=${fall.name}`;

    // const li = document.createElement('li');
    // const imgEl = document.createElement('img');
    // imgEl.src = `../assets/${fall.picture}.jpeg`; //  wahkeena' --> temp literal with ../assets/${}.jpeg in frontend
    // a.append(li, imgEl);
    // water.append(a);
    
    }}
loadFalls();
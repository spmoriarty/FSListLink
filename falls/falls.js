import { renderFalls } from "../util.js";
import { findById } from "../util.js";
import { waterFalls } from "../data.js";

const params = new URLSearchParams(window.location.search);
const falls = findById(params.get('id'), waterFalls);

// const fallsDiv = document.createElement('div');
// const main = document.getElementById('fall');
// const img = document.getElementById('displayFalls');
// const info = document.getElementById('info');
// console.log(falls);

// main.textContent = `${falls.name}`;
// img.src = `../assets/${falls.picture}.jpeg`;


const water = document.getElementById('water');
for (let falls of waterFalls) {
    const li = renderFalls(falls);
    water.append(li);
    
}
renderFalls(falls);
    
    

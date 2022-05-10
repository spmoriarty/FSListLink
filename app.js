// import functions and grab DOM elements
import { renderFalls } from "./util.js";
import { findById } from "./util.js";
import { waterFalls } from "./data.js";


// let state


const water = document.getElementById('water');
for (let falls of waterFalls) {
    const li = renderFalls(falls);
    water.append(li);
    
}
import { renderFalls } from "../util";
import { findById } from "../util";

const params = new URLSearchParams(window.location.search);
const falls = findById(params.get('id'), waterFalls);

const main = document.getElementById('fall');
const img = document.getElementById('displayFalls');
const info = document.getElementById('p');

main.textContent = waterFalls.name;
img.src = `../assets/${waterFalls.img}`;



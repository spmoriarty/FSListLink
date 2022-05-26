
import { fetchFalls, fetchFall } from '../fetch-utils.js';
import { findById } from '../util.js';
import { renderFall } from '../util.js';
const displayEl = document.getElementById('displayFalls');

async function loadFalls() {
    const falls = await fetchFalls();
    console.log(falls);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    const waterFall = await fetchFall(id);
    console.log(waterFall);
    
    const water = renderFall(waterFall);
    displayEl.append(water);
}
loadFalls();

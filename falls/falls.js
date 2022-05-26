
import { fetchFall } from '../fetch-utils.js';

import { renderFall } from '../util.js';
const displayEl = document.getElementById('displayFalls');

async function loadFalls() {
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
  
    const waterFall = await fetchFall(id);
 
    
    const water = renderFall(waterFall);
    displayEl.append(water);
}
loadFalls();

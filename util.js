//


export function renderFalls(waterFalls) { // create header el, insert header text, 
    const h1 = document.createElement('h1');
    h1.textContent = `Welcome to ${waterFalls.name} !`;

    const div = document.createElement('div');
    div.classList.add('displayFalls');
    const a = document.createElement('a');
    a.href = `./falls/?id=${waterFalls.name}`;

    
    const p = document.createElement('p');
    p.textContent = `${waterFalls.name} is ${waterFalls.height} tall and is ${waterFalls.distance} from Portland Oregon`;
    
    const imgEl = document.createElement('img');
    imgEl.src = `${waterFalls.picture}`;

    const origin = document.createElement('p');
    origin.textContent = `These falls were given the name by the ${waterFalls.id}.`;
// append header and image in my order
    a.append(imgEl);
    div.append(a, h1, p);
    return div;
}




export function findById(id, data) {
    return data.find((item) => item.id === id);
}
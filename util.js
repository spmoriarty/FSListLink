
export function renderFalls(waterFalls) {
   const div = document.createElement('div');
   div.classList.add('displayFalls')
   
    const p = document.createElement('p');
    p.textContent = `${waterFalls.name} is ${waterFalls.height} tall and is ${waterFalls.distance} from Portland Oregon`;
    const img = `${waterFalls.picture}`,

    div.append(p, img);
    return div;
}

export function renderFalls(waterFalls) {
   const div = document.createElement('div');
   div.classList.add('displayFalls')
   
    const p = document.createElement('p');
    p.textContent = `${waterFalls.name} is ${waterFalls.height} tall and is ${waterFalls.distance} from Portland Oregon`;
    const img = `${waterFalls.picture}`,

    const origin = document.createElement('p'),
    origin.textContent = `These falls were given the name by the ${waterFalls.id}.`,

    div.append(p, img, origin);
    return div;
};

export function findById(id, data) {
    return data.find((item) => item.id ===id);
};
// Enter Supabase Information
const SUPABASE_URL = 'https://xsjxkslcnzexkeuqopsq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzanhrc2xjbnpleGtldXFvcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTI0MzIsImV4cCI6MTk2Nzg2ODQzMn0.6PW-I5jDnoqhgO6Egpvc5fEpprJ1jHfmAODRlCynp2I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function fetchFalls() {
    const response = await client.from('waterfalls').select('*');
    return response.data;
}

export async function fetchFall(id) {
    const response = await client.from('waterfalls').select('*').match({ id: id }).single();
    return response.data;
}


// export async function renderFalls(waterfalls) {
//     await fetchFalls();

//     const h1 = document.createElement('h1');
//     h1.textContent = `Welcome to ${waterfalls.name} !`;

//     const div = document.createElement('div');
//     div.classList.add('displayFalls');
//     const a = document.createElement('a');
//     a.href = `./falls/?id=${waterfalls.picture}`;

    
//     const p = document.createElement('p');
//     p.textContent = `${waterfalls.name} is ${waterfalls.height} tall and is ${waterfalls.distance} from Portland Oregon`;
    
//     const imgEl = document.createElement('img');
//     imgEl.src = `../assets/${waterfalls.picture}.jpeg`;

//     const origin = document.createElement('p');
//     origin.textContent = `These falls were given the name by the ${waterfalls.id}.`;
// // append header and image in my order
//     a.append(imgEl);
//     div.append(a, h1, p);
//     return div.data;
// }


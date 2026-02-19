import { getCountry, getAttractions } from "./api.js";
import { showMap } from "./map.js";

const name = new URLSearchParams(location.search).get("name");

async function load() {
    try {
        const c = await getCountry(name);
        const a = await getAttractions(name);

        document.getElementById("countryDetails").innerHTML = `
    <h1>${c.name.common}</h1>
    <img src="${c.flags.png}">
    <p>Capital: ${c.capital}</p>
    <p>Population: ${c.population.toLocaleString()}</p>
    <p>Languages: ${Object.values(c.languages).join(", ")}</p>

    <h2>Top Attractions</h2>
    <img src="${a.image}" class="attraction-img">
    <ul>${a.text.map(t => `<li>${t}</li>`).join("")}</ul>
    `;

        showMap(c.latlng[0], c.latlng[1]);
    } catch {
        document.body.innerHTML = "<h2>Country not found 😢</h2>";
    }
}
load();

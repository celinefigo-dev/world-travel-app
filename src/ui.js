import { saveFavorite } from "./storage.js";

export function showCountryCard(country) {
    document.getElementById("results").innerHTML = `
  <div class="card">
    <img src="${country.flags.png}">
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital}</p>
    <button onclick="location.href='country.html?name=${country.name.common}'">View Details</button>
    <button onclick="(${saveFavorite.toString()})('${country.name.common}')">⭐ Favorite</button>
  </div>`;
}

export function showHistory(list) {
    const div = document.getElementById("history");
    div.innerHTML = "<h3>Search History</h3>";
    list.forEach(c => div.innerHTML += `<button onclick="location.href='country.html?name=${c}'">${c}</button>`);
}

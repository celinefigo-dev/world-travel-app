import { getFavorites } from "./storage.js";

const div = document.getElementById("favList");
getFavorites().forEach(c => {
    div.innerHTML += `<p onclick="location.href='country.html?name=${c}'">${c}</p>`;
});

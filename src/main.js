import { getCountry } from "./api.js";
import { showCountryCard, showHistory } from "./ui.js";
import { saveHistory, getHistory } from "./storage.js";
import { startSlider } from "./slider.js";

startSlider();

document.getElementById("searchBtn").onclick = async () => {
    const name = document.getElementById("searchInput").value;
    try {
        const data = await getCountry(name);
        showCountryCard(data);
        saveHistory(name);
        showHistory(getHistory());
    } catch {
        alert("Country not found");
    }
};

document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

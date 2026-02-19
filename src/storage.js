export function saveHistory(country) {
    const h = JSON.parse(localStorage.getItem("history")) || [];
    if (!h.includes(country)) h.push(country);
    localStorage.setItem("history", JSON.stringify(h));
}

export function getHistory() {
    return JSON.parse(localStorage.getItem("history")) || [];
}

export function saveFavorite(country) {
    const f = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!f.includes(country)) f.push(country);
    localStorage.setItem("favorites", JSON.stringify(f));
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

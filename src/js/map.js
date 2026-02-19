export function showMap(lat, lng) {
    document.getElementById("map").innerHTML = `
  <iframe width="100%" height="300"
  src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - 1},${lat - 1},${lng + 1},${lat + 1}&marker=${lat},${lng}">
  </iframe>`;
}

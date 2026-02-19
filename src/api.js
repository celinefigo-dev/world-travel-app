export async function getCountry(name) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!res.ok) throw new Error("Country not found");
    const data = await res.json();
    return data[0];
}

export async function getAttractions(country) {
    const search = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Tourism%20in%20${country}&format=json&origin=*`
    );
    const searchData = await search.json();
    if (!searchData.query.search.length) return { text: [], image: "" };

    const title = searchData.query.search[0].title;

    const page = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
    const pageData = await page.json();
    const text = pageData.extract.split(".").slice(0, 3);

    const imgRes = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&pithumbsize=500&format=json&origin=*`
    );
    const imgData = await imgRes.json();
    const pages = Object.values(imgData.query.pages);
    const image = pages[0].thumbnail?.source || "/public/hero1.jpg";

    return { text, image };
}

const images = ["/public/hero1.jpg", "/public/hero2.jpg", "/public/hero3.jpg"];
let i = 0;

export function startSlider() {
    const hero = document.querySelector(".hero");
    setInterval(() => {
        hero.style.backgroundImage = `url(${images[i]})`;
        i = (i + 1) % images.length;
    }, 4000);
}

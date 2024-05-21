const container = document.querySelector(".new")
const coffees = [
    { name: "", image: "img/mosque.avif" },
    { name: "1", image: "img/new/0.webp" },
    { name: "2", image: "img/new/1.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "3", image: "img/new/2.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "4", image: "img/new/3.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "5", image: "img/new/4.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "6", image: "img/new/5.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "7", image: "img/new/6.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "8", image: "img/new/7.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "9", image: "img/new/8.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "10", image: "img/new/9.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "11", image: "img/new/10.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "12", image: "img/new/11.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "13", image: "img/new/12.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "14", image: "img/new/13.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "15", image: "img/new/14.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "16", image: "img/new/15.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "17", image: "img/new/16.webp" },
    { name: "", image: "img/new/Salavat.webp" },
    { name: "", image: "img/mosque.avif" },
]


const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
        (output += `
                <div class="new_pages">
                  <img src=${image} />
                  <p>${name}</p>
                  <div class="line"></div>
                </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
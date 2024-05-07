const containerr = document.querySelector(".archive")
const coffeess = [
    { image: "img/archive/1.webp" },
    { image: "img/archive/2.webp" },
    { image: "img/archive/3.webp" },
    { image: "img/archive/4.webp" },
    { image: "img/archive/5.webp" },
    { image: "img/archive/6.webp" },
    { image: "img/archive/7.webp" },
    { image: "img/archive/8.webp" },
    { image: "img/archive/9.webp" },
    { image: "img/archive/10.webp" },
    { image: "img/archive/11.webp" },
    { image: "img/archive/12.webp" },
    { image: "img/archive/13.webp" },
    { image: "img/archive/14.webp" },
    { image: "img/archive/15.webp" },
    { image: "img/archive/16.webp" },
    { image: "img/archive/17.webp" },
    { image: "img/archive/18.webp" },
    { image: "img/archive/19.webp" },
    { image: "img/archive/20.webp" },
    { image: "img/archive/21.webp" },
    { image: "img/archive/22.webp" },
    { image: "img/archive/23.webp" },
    { image: "img/archive/24.webp" },
    { image: "img/archive/25.webp" },
    { image: "img/archive/26.webp" },
    { image: "img/archive/27.webp" },
    { image: "img/archive/28.webp" },
    { image: "img/archive/29.webp" },
    { image: "img/archive/30.webp" },
    { image: "img/archive/31.webp" },
    { image: "img/archive/32.webp" },
    { image: "img/archive/33.webp" },
    { image: "img/archive/34.webp" },
    { image: "img/archive/35.webp" },
    { image: "img/archive/36.webp" },
    { image: "img/archive/37.webp" },
    { image: "img/archive/38.webp" },
    { image: "img/archive/39.webp" },
    { image: "img/archive/40.webp" },
    { image: "img/archive/41.webp" },
    { image: "img/archive/42.webp" },
]


const showCoffeess = () => {
    let outputt = ""
    coffeess.forEach(
        ({ name, image }) =>
        (outputt += `
                <div class="new_pages">
                  <img src=${image} />
                </div>
                `)
    )
    containerr.innerHTML = outputt
}

document.addEventListener("DOMContentLoaded", showCoffeess)
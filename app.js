
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

next.addEventListener("click", () => {
    let slider_item = document.querySelectorAll(".slider_item")
    document.querySelector(".slider").appendChild(slider_item[0])
})

prev.addEventListener("click", () => {
    let slider_item = document.querySelectorAll(".slider_item")
    document.querySelector(".slider").prepend(slider_item[slider_item.length - 1])
})

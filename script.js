let gridWrapper = document.getElementById("gridWrapper")
let arrowUp = document.getElementById("arrowUp")
let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let arrowDown = document.getElementById("arrowDown")

let placement = 0

for(i = 0; i < 100; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile")
    tile.id = i + 1;
    gridWrapper.appendChild(tile)
}

arrowUp.addEventListener("click", () => {
    placement += 10
    console.log(placement)
})
arrowLeft.addEventListener("click", () => {
    placement -= 1
    console.log(placement)

})
arrowRight.addEventListener("click", () => {
    placement += 1
    console.log(placement)

})
arrowDown.addEventListener("click", () => {
    placement -= 10
    console.log(placement)

})
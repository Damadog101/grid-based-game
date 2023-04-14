let gridWrapper = document.getElementById("gridWrapper")
let arrowUp = document.getElementById("arrowUp")
let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let arrowDown = document.getElementById("arrowDown")


let tilesArr = document.querySelectorAll(".tile")
let placement = 0

for(i = 0; i < 100; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile")
    tile.id = i + 1;
    gridWrapper.appendChild(tile)
}

arrowUp.addEventListener("click", () => {
    for(tile of tilesArr) {
    tile.classList.remove("green")
}
    placement += 10
    let newTile = document.getElementById(placement)
newTile.classList.add("green")
    console.log(placement)
})
arrowLeft.addEventListener("click", () => {
    placement -= 1
    console.log(placement)

   
    let newTile = document.getElementById(placement)
newTile.classList.add("green")

})
arrowRight.addEventListener("click", () => {
    placement += 1
    console.log(placement)
let newTile = document.getElementById(placement)
newTile.classList.add("green")

})
arrowDown.addEventListener("click", () => {
    placement -= 10
    console.log(placement)

let newTile = document.getElementById(placement)
newTile.classList.add("green")
})
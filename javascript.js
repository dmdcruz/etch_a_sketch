const canvas = document.querySelector(".container");
const squareNoBtn = document.querySelector(".pixelsNoBtn");
let pixelQtd = 16;

//Function to create the grid
function createGrid(quantity) {
    for (let i = 0; i < quantity ; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        canvas.appendChild(row);
        for (let x = 0; x < quantity; x++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class","pixels");
            row.appendChild(pixel);
            pixel.addEventListener("mouseover", colorPixel(pixel))
        }
    };
};

//Color grid pixels by hovering the mouse
function colorPixel(pixel) {
    pixel.addEventListener('mouseover',() => {
        pixel.style.background = "black";
    });
};

//Prompt number of squares per side for the new grid
function squaresNo() {
    return pixelQtd = prompt("Grid Size: how many squares do you want per side on the grid?")
}


squareNoBtn.addEventListener("click", () =>{
    canvas.innerHTML = "";
    pixelQtd = squaresNo();
    createGrid(pixelQtd);
});

createGrid(pixelQtd);
const canvas = document.querySelector(".container");

const pixelQtd = 16;


function createGrid(quantity) {
    for (let i = 0; i < quantity ; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        canvas.appendChild(row);
        for (let x = 0; x < quantity; x++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class","pixels");
            row.appendChild(pixel);
        }
    };
};

createGrid(pixelQtd);
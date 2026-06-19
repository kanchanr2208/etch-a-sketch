let container = document.querySelector(".container");
let gridSize = 16


function createGrid(boxSize) {
    let numberOfBoxes = boxSize * boxSize;

    for (let i = 1; i <= numberOfBoxes; i++) {
        let pixel = document.createElement("div");
        let dimension = 900/boxSize;
        pixel.style.width = (`${dimension}px`);
        pixel.style.height = (`${dimension}px`)
        pixel.classList.add("pixel");
        container.appendChild(pixel);

        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        let opacity = 0.1;

        pixel.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
            opacity = opacity + 0.1;
        })
    }

}

createGrid(gridSize);

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click" , e => {
    e.preventDefault();
    container.replaceChildren();

    setTimeout(() => {
        let gridSizeInput = prompt("please enter the grid size. For example: for a 16*16 grid, enter 16.");
        let gridSize = parseInt(gridSizeInput);
        if (isNaN(gridSize)) {
            alert("Got something funky. Try again.")
        } else if (gridSize >= 101) {
            alert("grid size too high. Please enter a between 5 and 100")
        } else if (gridSize <= 3) {
            alert("grid size to small. please enter a between 5 and 100")
        } else if (gridSizeInput.includes(".") || gridSizeInput.includes("-")){
            alert("dont try to be sneaky. Try again")
        } else {
            createGrid(gridSize);     
        }
    }, 10);  
})
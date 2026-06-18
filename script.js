let container = document.querySelector(".container");

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click" , e => {
    e.preventDefault();
    container.replaceChildren();
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
        let numberOfBoxes = gridSize * gridSize;
        
        for (let i = 1; i <= numberOfBoxes; i++) {
            let pixel = document.createElement("div");
            let dimension = 900/gridSize;
            pixel.style.width = (`${dimension}px`);
            pixel.style.height = (`${dimension}px`)
            pixel.classList.add("pixel");
            container.appendChild(pixel);

            pixel.addEventListener("mouseenter", e => {
                e.target.style.backgroundColor = "orange";
            })
        }
         
    }
})
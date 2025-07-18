document.addEventListener("contextmenu", e => e.preventDefault())

const container = document.getElementById("grid-container");
const button = document.getElementById("create-grid-button");
let isLeftClicking = false;

document.addEventListener("mousedown", e => {
    if (e.button === 0) {
        isLeftClicking = true;
    }
});

document.addEventListener("mouseup", e => {
    if (e.button === 0) {
        isLeftClicking = false;
    }
});

function createNewGrid(size) {
    container.innerHTML = "";

    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for(let col = 0; col < size; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover", e => {
                if (isLeftClicking) {
                    square.classList.add("hovered");
                    square.classList.remove("leftClickHovered");
                } else {
                    square.classList.add("leftClickHovered");
                    square.classList.remove("hovered");
                }
            
        });
        
        rowDiv.appendChild(square);
        
    }
    
    container.appendChild(rowDiv);
    }

}

createNewGrid(16);

button.addEventListener("click", () => {
    let size = prompt("Enter the number of squares: ");
    size = parseInt(size);
    if (isNaN(size) || size > 100 || size < 0) {
        alert("Invalid number!");
    } else {
        createNewGrid(size);
    }
});


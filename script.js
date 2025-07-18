document.addEventListener("contextmenu", e => e.preventDefault())

const container = document.getElementById("grid-container");
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


for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", e => {
        if (isLeftClicking) {
            square.classList.add("hovered");
            square.classList.remove("rightClickHovered");
        } else {
            square.classList.add("rightClickHovered");
            square.classList.remove("hovered");
        }
    });

    container.appendChild(square);

};



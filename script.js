document.addEventListener("contextmenu", e => e.preventDefault())

const container = document.getElementById("grid-container");
let isRightClicking = false;

document.addEventListener("mousedown", e => {
    if (e.button === 2) {
        isRightClicking = true;
    }
});

document.addEventListener("mouseup", e => {
    if (e.button === 2) {
        isRightClicking = false;
    }
});


for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", e => {
        if (isRightClicking) {
            square.classList.add("rightClickHovered");
            square.classList.remove("hovered");
        } else {
            square.classList.add("hovered");
            square.classList.remove("rightClickHovered");
        }
    });

    container.appendChild(square);

};



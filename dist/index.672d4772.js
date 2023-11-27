let counter = 0;
let colors = [
    "red",
    "green",
    "blue",
    "yellow"
];
let n = colors.length;
function onClick() {
    currentColor = colors[counter % n];
    counter++;
    document.body.style.backgroundColor = currentColor;
}
function reverseColor() {
    currentColor = colors[n];
    n--;
    document.body.style.backgroundColor = currentColor;
}
const changeColorBtn = document.querySelector("#changeColorBtn");
changeColorBtn.addEventListener("click", onClick);
const reverseColorBtn = document.querySelector("#reverseColorBtn");
reverseColorBtn.addEventListener("click", reverseColor);

//# sourceMappingURL=index.672d4772.js.map

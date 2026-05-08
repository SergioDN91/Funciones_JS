
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

blue.addEventListener("click", function () {
    blue.style.backgroundColor = "black";
});

red.addEventListener("click", function () {
    red.style.backgroundColor = "black";
});

green.addEventListener("click", function () {
    green.style.backgroundColor = "black";
});

yellow.addEventListener("click", function () {
    yellow.style.backgroundColor = "black";
});


let colorGlobal = "";


const keyDiv = document.getElementById("key");


document.addEventListener("keydown", function (event) {

    if (event.key === "a") {
        colorGlobal = "pink";
        keyDiv.style.backgroundColor = colorGlobal;

    } else if (event.key === "s") {
        colorGlobal = "orange";
        keyDiv.style.backgroundColor = colorGlobal;

    } else if (event.key === "d") {
        colorGlobal = "skyblue";
        keyDiv.style.backgroundColor = colorGlobal;

    } else if (event.key === "q") {
        crearDiv("purple");

    } else if (event.key === "w") {
        crearDiv("gray");

    } else if (event.key === "e") {
        crearDiv("brown");
    }

});


function crearDiv(color) {

    const nuevoDiv = document.createElement("div");

    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.marginTop = "10px";

    document.body.appendChild(nuevoDiv);
}
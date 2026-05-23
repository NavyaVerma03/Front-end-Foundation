let text = document.getElementById("text");

let increase = document.getElementById("increase");

let decrease = document.getElementById("decrease");

let size = 24;

increase.onclick = function(){

    size = size + 2;

    text.style.fontSize = size + "px";

}

decrease.onclick = function(){

    size = size - 2;

    text.style.fontSize = size + "px";

}
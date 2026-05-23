let text = document.getElementById("text");

let count = document.getElementById("count");

text.addEventListener("input", function(){

    let total = text.value.length;

    count.innerText = total + " Characters";

});
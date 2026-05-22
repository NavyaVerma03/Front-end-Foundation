function changeColor(){

  let colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "yellow",
    "pink",
    "cyan",
    "magenta",
    "lime",
    "teal",
  ];

  let randomColor =
  colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("box").style.backgroundColor =
  randomColor;
}
document.querySelector('button').addEventListener('click', function () {
   document.body.style.backgroundColor = generateColor();
});

function generateColor() {
   const red = Math.floor(Math.random() * 255);
   const green = Math.floor(Math.random() * 255);
   const blue = Math.floor(Math.random() * 255);
   return `rgb(${red}, ${green}, ${blue})`;
}

/*Увеличивайте значение счётчика при каждом клике на печеньку
Чередуйте уменьшение и увеличение печеньки при каждом клике (уменьшайте и увеличивайте значения width/height)*/

const image = document.getElementById("cookie");

function changeSizes (){
  let output = document.getElementById("clicker__counter");
  output.textContent++;

 if (output.textContent % 2 === 0) {
    image.width = 200;
   } else {
    image.width = 150;
   }

   console.log(output.textContent);
};

image.onclick = changeSizes;


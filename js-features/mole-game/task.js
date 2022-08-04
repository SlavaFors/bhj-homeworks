let killedHole = document.getElementById("dead"); 
let miss = document.getElementById("lost"); 
getHole = (index) => {
  return document.getElementById(`hole${index}`);
};

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).className.includes("hole_has-mole")) {
      killedHole.textContent++;
    } else {
      miss.textContent++;
    }

    if (miss.textContent == 5) {
       alert("Вы проиграли!");
       killedHole.textContent = 0;
       miss.textContent = 0;
    } else if (killedHole.textContent == 10) {
      alert("Вы выиграли!");
      killedHole.textContent = 0;
      miss.textContent = 0;
    }
  };
}
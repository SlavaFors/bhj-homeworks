
/*let count = function(){
  const output = document.getElementById("timer");
  if (output.textContent <= 0){
    alert ("Вы победили в конкурсе!");
    return clearInterval(intervalId);
  } else {
    (output.textContent--);
  }
};
const intervalId = setInterval(count, 20);
*/

let count = function(){
  const output = document.getElementById("timer");
  if (--output.textContent === 0){
    alert ("Вы победили в конкурсе!");
    return clearInterval(intervalId);
  } 
};
const intervalId = setInterval(count, 20);

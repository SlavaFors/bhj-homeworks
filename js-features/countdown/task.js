const count = function () {
  const output = document.getElementById ("timer");
  output.textContent -= 1;
  if (output.textContent <= 0) {
    alert('Вы победили в конкурсе!');
    return clearInterval (inervalID);
  }
}

const inervalID = setInterval(count, 1000);



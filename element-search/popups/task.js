const modalMain = document.getElementById("modal_main"); //id "Сделать хорошо"
const modalSuccess = document.getElementById("modal_success");  //id "Хорошо сделано"
const btnDanger = document.querySelector (".btn_danger"); //Кнопка "Сделать хорошо"
const modalClose = document.querySelector (".modal__close");//закрытие окна в целом


modalSuccess.style.display = "none"; //В момент запуска скрипта, покажите окно #modal_main

btnDanger.onclick = function () { //По нажатию на элемент с классом show-success покажите окно #modal_success
  modalSuccess; //??? Чего не хватает для того, чтобы работало?? 

  /*console.log(modalSuccess.textContent); проверка*/
};

modalClose.onclick = function () { 
  modalMain.style.display = "none";
  modalSuccess.style.display = "none";
};

/*Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close*/

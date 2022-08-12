/*
Станислава, здравствуйте. Вам не нужно взаимодействовать напрямую со стилями. 
Ипользуйте только изменения классов. По клику на btnDanger вы ничего не выполняете. 
Только обращаетесь к модалке и выводите её в консоль (в комментарии). 
Вам нужно убрать класс modal_active (иными словами, присвоить modalMain.className = 'modal';) 
и добавить класс активности другой модалке: modalSuccess.className = 'modal modal_active';
При этом, всё взаимодействие со стилями необходимо убрать.

const modalMain = document.getElementById("modal_main"); //id "Сделать хорошо"
const modalSuccess = document.getElementById("modal_success");  //id "Хорошо сделано"
const btnDanger = document.querySelector (".btn_danger"); //Кнопка "Сделать хорошо"
const modalClose = document.querySelector (".modal__close");//закрытие окна в целом
*/


const modalMain = document.getElementById("modal_main"); //id "Сделать хорошо"
const modalSuccess = document.getElementById("modal_success");  //id "Хорошо сделано"
const modalClose = document.getElementsByClassName("modal__close");//закрытие окна в целом

if(!modalMain.className.includes('modal_active')){ //В момент запуска скрипта, покажите окно #modal_main
  modalMain.className = modalMain.className + ' modal_active';
}

modalMain.onclick = function () { /*По нажатию на элемент с классом show-success покажите окно #modal_success*/
  modalMain.className = 'modal';
  modalSuccess.className = 'modal modal_active';
}

 /*Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close*/

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function () {
    if (modalClose[i].closest(".modal_active")) {
      modalClose[i].closest(".modal_active").classList.remove("modal_active");
    }
  };
}
/*Домашнее задание к занятию 2.1 «DOM».
Необходимо реализовать механизм смены текстовых объявлений. Каждое объявление меняется через 1 секунду.
Для того, чтобы задать текстовый элемент активным, установите у него класс rotator__case_active:
  <span class="rotator__case rotator__case_active">Бог JS</span>
Для того, чтобы задать текстовый элемент активным, установите у него класс rotator__case_active:

<span class="rotator__case rotator__case_active">Бог JS</span>

Процесс реализации
=Каждую секунду меняйте класс с одного элемента на другой
=Сделайте акцент на том, чтобы на странице можно было использовать несколько ротаторов одновременно
=Смена текстовых блоков должна быть бесконечной.
=Подумайте, как из setInterval сделать бесконечный цикл
*/

const allElements = [...document.querySelectorAll('.rotator__case')];

const activeElement = () => {
  for(let i in allElements){
    if (allElements[i] ===  allElements[allElements.length - 1]){
      allElements[i].classList.remove('rotator__case_active');
      allElements[0].classList.add('rotator__case_active');
      return;
    };
    if (allElements[i].classList.contains('rotator__case_active')){
      allElements[i].classList.remove('rotator__case_active');
      
      let nextElement = allElements[i].nextElementSibling;
      nextElement.classList.add('rotator__case_active');
      return;
    }
  }
}

setInterval(() => {
  activeElement ();
}, 1000)


  
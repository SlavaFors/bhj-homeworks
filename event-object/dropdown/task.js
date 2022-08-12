/*В элементе с классом dropdown__value содержится выбранное значение.

Для того, чтобы открыть меню, требуется проставить класс dropdown__list_active:
<ul class="dropdown__list dropdown__list_active"></ul>

Нажатие на элемент с классом dropdown__item при открытом списке должно:
1) Закрывать список
2) Устанавливать новое значение в элемент с классом dropdown__value

<div class="dropdown">
    <div class="dropdown__value">JavaScript</div>
    <ul class="dropdown__list">
        <li class="dropdown__item">
            <a href="" class="dropdown__link">
                JavaScript
            </a>
        </li>

Процесс реализации
1. Сделайте сворачивание/разворачивание списка по нажатию на кнопку
2. Сделайте замену значения по выбору соответствующего пункта меню
3. Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
4. Не забывайте запрещать переход по ссылке

Используемые темы
1. Событие click, метод addEventListener, обработчик события
2. Свойство textContent
3. Метод Array.from() или оператор распространения (spread, «...») для удобной навигации по найденным элементам
4. Метод closest */


const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list"); //находим на странице список

dropdownValue.addEventListener("click", () => { //добавляем обработчик события
  dropdownList.classList.add("dropdown__list_active");
})

function select(event) {
  dropdownValue.textContent = event.target.textContent;
  dropdownList.classList.remove("dropdown__list_active");
  event.preventDefault();
}

dropdownList.addEventListener("click", select);
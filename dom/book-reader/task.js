/*Необходимо доработать интерфейс онлайн-читалки электронных книг с возможностью смены размера шрифта

HTML-разметка элемента управления размером выглядит следующим образом:

<div class="book__control book__control_font-size">
    <a href="" class="font-size font-size_small" data-size="small">A</a>
    <a href="" class="font-size font-size_active">A</a>
    <a href="" class="font-size font-size_big" data-size="big">A</a>
</div>
HTML-разметка читалки выглядит так:

<div class="book" id="book">
    <!-- содержимое -->
</div>

У этого элемента есть два дополнительных класса: book_fs-big и book_fs-small. Именно они делают текст меньшего или большего размеров:

<!-- увеличенный шрифт -->
<div class="book book_fs-big" id="book"></div>

<!-- обычный шрифт (нет классов) -->
<div class="book" id="book"></div>

<!-- уменьшенный шрифт -->
<div class="book book_fs-small" id="book"></div>

Процесс реализации
При нажатии на один из элементов с классом font-size, вам необходимо:
Поставить этому элементу класс font-size_active
В зависимости от размера, поставить элементу с классом book соответствующий класс */

//Если  активен  <a href="" class="font-size font-size_small" data-size="small">A</a>
//то добавляем класс book_fs-small
// <a href="" class="font-size font-size_big" data-size="big">A</a>
//то добавляем класс book_fs-big


let menu = document.querySelectorAll(".font-size");
let arr = [];
arr = Array.from(menu);

let elemBook = document.getElementById("book");
let elemOrig = elemBook.className;


let onClickFunc = function() {
    let res = arr.findIndex(function(item) {
        return item.className.includes("font-size_active");
    });
    if(res >= 0) {
        let elem1 = arr[res];
        elem1.className = elem1.className.replace(" font-size_active", "");
    }
    this.className += " font-size_active";
    res = arr.indexOf(this);

    if(res == 0) {
        elemBook.className = elemOrig + " book_fs-small";
    }
    else if(res == 1) {
        elemBook.className = elemOrig;
    }
    else if(res == 2) {
        elemBook.className = elemOrig + " book_fs-big";
    }

    return false;
}

for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    elem.onclick = onClickFunc;
}
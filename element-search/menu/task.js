/*Процесс реализации
1) Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
2) Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
3) Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные пункты меню должны 
без помех переводить пользователя на соответствующие страницы.
*/

let menuSub = Array.from(document.querySelectorAll("ul.menu.menu_sub")); //меню
let menuLink = Array.from(document.querySelectorAll(".menu__link")); //подменю

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    const subMenu = menuLink[i]
      .closest(".menu__item")
      .querySelector(".menu_sub");
    const result = menuSub.find((elems) =>
      elems.classList.contains("menu_active")
    );
    if (subMenu) {
      if (result === undefined) {
        subMenu.classList.add("menu_active");
      } else {
        if (result !== subMenu) {
          subMenu.classList.add("menu_active");
        }
        result.classList.remove("menu_active");
      }
      return false;
    }
  };
}
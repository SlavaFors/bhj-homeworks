
const navigationItems = [...document.getElementsByClassName('tab')];
const navContent = [...document.getElementsByClassName('tab__content')];


for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].addEventListener("click", function() {

        if (navigationItems[i].getAttribute("class") != "tab tab_active") {
            for (let j = 0; j < navigationItems.length; j++) {
                navigationItems[j].classList.remove("tab_active");
                navigationItems[i].classList.add("tab_active");
                navContent[j].classList.remove("tab__content_active");
                navContent[i].classList.add("tab__content_active");
            }
        } 
    });
}
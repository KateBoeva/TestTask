/**
 * Created by katemrrr on 03.10.17.
 */

var menu = document.getElementById("menu");
var currentOpenMenu = null;
menu.onclick = function (event) {
    var subMenu = event.target.closest('.catalog__menu_item').querySelector('.catalog__menu-list--sub-menu');
    if (subMenu) {
        if (currentOpenMenu == subMenu) {
            subMenu.style.height = '0';
            currentOpenMenu = null;
        } else {
            var menuHeight = subMenu.firstElementChild.clientHeight + 'px';
            subMenu.style.height = menuHeight;
            subMenu.firstElementChild.onclick = (event) => event.stopPropagation();
            if (currentOpenMenu){
                currentOpenMenu.style.height = '0';
            }
            currentOpenMenu = subMenu;
        };
    }
}
/**
 * Created by katemrrr on 04.10.17.
 */

var dark = document.getElementById('dark_back');
var win = document.getElementById('modal');

function openWindow() {
    win.classList.remove('fadeOut');
    win.classList.add('fadeIn');
    win.style.display = 'block';
    dark.style.display = 'block';
}

function closeWindow() {
    win.classList.remove('fadeIn');
    win.classList.add('fadeOut');
    setTimeout(function () {
        win.style.display = 'none';
    }, 500);
    dark.style.display = 'none';
}

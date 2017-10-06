/**
 * Created by katemrrr on 04.10.17.
 */

var dark = document.getElementById('dark_back');
var win = document.getElementById('modal');

function openWindow() {
    win.style.display = 'block';
    dark.style.display = 'block';
}

function closeWindow() {
    win.style.display = 'none';
    dark.style.display = 'none';
}
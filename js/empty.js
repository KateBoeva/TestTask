/**
 * Created by katemrrr on 06.10.17.
 */

// var name = document.getElementById('name');
// var phone = document.getElementById('phone');
// var email = document.getElementById('email');

var input = [
    document.getElementById('name'),
    document.getElementById('phone'),
    document.getElementById('email')
];

function checkForm() {
    var valid = true;
    for (var i = 0; i < input.length; i++) {
        console.log(input[i].value);
        if (input[i].value == "") {
            // input[i].className = 'empty_field';
            input[i].classList.add('empty_field');
            input[i].placeholder = "Поле обязательно для заполнения";
            valid = false;
        }
        if (input[i].value != ""){
            input[i].classList.remove('empty_field');
        }
    }
    return valid;
}


// --- Библиотеки
//= jquery-3.2.1.min.js
window.onload = function () {

    //получаем идентификатор элемента
    var openForm1 = document.getElementById('button__adding-form--open1');
    var openForm2 = document.getElementById('button__adding-form--open2');

openForm1.onClick = openForm();

    //вешаем на него событие
  var openForm = function() {
      alert('Click');
    }
}

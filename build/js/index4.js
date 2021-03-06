window.onload = function () {

  var clearInputs = function(){
		var Inputs = document.getElementsByClassName("add-book__input");
		for(var i = 0; i < Inputs.length; i++){
			if(Inputs[i].type == 'text'){Inputs[i].value = '';}};
	};
  var openForm = function() {
		document.getElementById('add-book--background').classList.remove("visible--disable");
		document.getElementById('add-book').classList.remove("visible--disable");
    };
  var closeForm = function() {
		document.getElementById('add-book--background').classList.add("visible--disable");
		document.getElementById('add-book').classList.add("visible--disable");
    };
  var data = {};
  var checkInputs = function(){
		var bookName = document.getElementById('bookName');
		var bookAutor = document.getElementById('bookAutor');
		var bookYear = document.getElementById('bookYear');
		var bookPicture = document.getElementById('bookPicture');
		if(bookName.value!==''){data.bookName=bookName.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите название книги!';
				bookName.parentNode.insertBefore(newP, bookName.nextSibling);
				return false;
			};
		if(bookAutor.value!==''){data.bookAutor=bookAutor.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите автора книги!';
				bookAutor.parentNode.insertBefore(newP, bookAutor.nextSibling);
				return false;
			};
		if(bookYear.value==''){
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите год издания книги!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else if(isNaN(bookYear.value)&&( parseInt( bookYear.value ) != bookYear.value )){
			var newP = document.createElement('p');
				newP.innerHTML = 'Год издания книги должен быть целым числом!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else if(bookYear.value>(new Date()).getFullYear()){
				var newP = document.createElement('p');
				newP.innerHTML = 'Год издания книги не может превышать текущий год!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else if(bookYear.value<1900){
				var newP = document.createElement('p');
				newP.innerHTML = 'Слишком древняя книга!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else{data.bookYear=bookYear.value};
		if(bookPicture.value!==''){data.bookPicture=bookPicture.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите адрес изображения книги!';
				bookPicture.parentNode.insertBefore(newP, bookPicture.nextSibling);
				return false;
			};
		return data;
  };
	var createBook = function(data){
		if((data.bookName.value!=='')&&(data.bookAutor.value!=='')&&(data.bookYear.value!=='')&&(data.bookPicture.value!=='')){
		var table = document.getElementById('booklist__tbody');
		var newTr = document.createElement('tr');
		newTr.classList.add("booklist__item");
		newTr.innerHTML = '<td class=\"booklist__item--photo\"><img src=\''+data.bookPicture+'alt=\''+data.bookName+'/></td><td class=\"booklist__item--description\"><div class=\"book__description\"><h6 class=\"book__description-name\">'+data.bookPicture+'</h6><span class=\"book__description-autor\">'+data.bookAutor+'</span><span class=\"book__description-year\">'+data.bookYear+' г.</span></div></td><td class=\"booklist__item--button-block\"><div class=\"booklist__item--buttons\"><button class=\"booklist__button button--edit-book\">Редактировать</button><button class=\"booklist__button button--del-book\">Удалить</button></div></td>';
		table.appendChild(newTr);
		data.bookName = null;data.bookAutor = null;data.bookYear = null;data.bookPicture = null;data = null;
		closeForm();
		}
	}
	var selectedId;
		var deleteItem = function(selectedId){
		var tBody = document.getElementById('booklist__tbody');
		var elementToDel = tBody.children[selectedId];
		//elementToDel.remove();
	}
	var getButtonsId = function(){
			var buttons = document.querySelectorAll(".button--del-book");
				for(var i=0; i<buttons.length;i++){
				buttons[i].id = [i];
				buttons[i].addEventListener("click", function() {
				
				selectedId = this.id;
				//alert(selectedId);
				deleteItem(selectedId);
				//selectedId = null;
				//getButtonsId();
				
			});
			

		}
		alert(selectedId);
	}


	getButtonsId();
	document.getElementById('button__adding-form--open1').onclick = function() {
	clearInputs();
	openForm();
	}
	document.getElementById('button__adding-form--open2').onclick = function() {
	clearInputs();
	openForm();
	}
	document.getElementById('button--close').onclick = function() {
	clearInputs();
	closeForm();
	}
	/**/
	document.getElementById('button--save').onclick = function() {
	checkInputs();
	createBook(data);
	getButtonsId();
	}
	

}
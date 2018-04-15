window.onload = function () {

  var clearInputs = function(){
	  	var bookName = document.getElementById('bookName').nextSibling;
		if(bookName){bookName.remove()}
		var bookAutor = document.getElementById('bookAutor').nextSibling;
		if(bookAutor){bookAutor.remove()}
		var bookYear = document.getElementById('bookYear').nextSibling;
		if(bookYear){bookYear.remove()}
		var bookPicture = document.getElementById('bookPicture').nextSibling;
		if(bookPicture){bookPicture.remove()}

		var Inputs = document.getElementsByClassName("add-book__input");
		for(var i = 0; i < Inputs.length; i++){
			if(Inputs[i].type == 'text'){Inputs[i].value = '';}
			};
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
		var bookNam = document.getElementById('bookNam');

  		if(bookName.value!==''){
				data.bookName=bookName.value;
				var bookNameP = bookName.nextSibling;
				if(bookNameP){bookNameP.remove()}
			}else{
				var bookNameP = bookName.nextSibling;
				if(bookNameP){bookNameP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите название книги!';
				bookName.parentNode.insertBefore(newP, bookName.nextSibling);
				return false;
  			};
		data.bookNam=bookNam.value;

  		if(bookAutor.value!==''){
			data.bookAutor=bookAutor.value;
			var bookAutorP = bookAutor.nextSibling;
			if(bookAutorP){bookAutorP.remove()}
		}else{
				var bookAutorP = bookAutor.nextSibling;
				if(bookAutorP){bookAutorP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите автора книги!';
				bookAutor.parentNode.insertBefore(newP, bookAutor.nextSibling);
				return false;
			};
		if(bookYear.value==''){
				var bookYearP = bookYear.nextSibling;
				if(bookYearP){bookYearP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите год издания книги!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else if(isNaN(bookYear.value)&&( parseInt( bookYear.value ) != bookYear.value )){
				var bookYearP = bookYear.nextSibling;
				if(bookYearP){bookYearP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Год издания книги должен быть целым числом!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else if(bookYear.value>(new Date()).getFullYear()){
				var bookYearP = bookYear.nextSibling;
				if(bookYearP){bookYearP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Год издания книги не может превышать текущий год!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else if(bookYear.value<1900){
				var bookYearP = bookYear.nextSibling;
				if(bookYearP){bookYearP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Слишком древняя книга!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
				return false;
			}else{
				data.bookYear=bookYear.value
				var bookYearP = bookYear.nextSibling;
				if(bookYearP){bookYearP.remove()}
				};
		if(bookPicture.value!==''){
			data.bookPicture=bookPicture.value;
			var bookPictureP = bookPicture.nextSibling;
			if(bookPictureP){bookPictureP.remove()}
			}else{
				var bookPictureP = bookPicture.nextSibling;
				if(bookPictureP){bookPictureP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите адрес изображения книги!';
				bookPicture.parentNode.insertBefore(newP, bookPicture.nextSibling);
				return false;
			};
		return data;
  };
	var createBook = function(data){
		if((data.bookName.value!=='')&&(data.bookAutor.value!=='')&&(data.bookYear.value!=='')&&(data.bookPicture.value!=='')){
			var tBody = document.getElementById('booklist__tbody');
			var nam = data.bookNam;
			var elementToEdit = tBody.children[nam];
			var newTr = document.createElement('tr');
			newTr.classList.add("booklist__item");
			newTr.innerHTML = '<td class="booklist__item--photo"><img src="'+data.bookPicture+'" alt="'+data.bookName+'" width="60px" height="100px"/>     </td><td class="booklist__item--description"><div class="book__description"><h6 class="book__description-name">'+data.bookName+'</h6><span class="book__description-autor">'+data.bookAutor+'</span><span class="book__description-year">'+data.bookYear+' г.</span></div></td><td class="booklist__item--button-block"><div class="booklist__item--buttons"><button data-action="edit" class="booklist__button button--edit-book">Редактировать</button><button data-action="delete" class="booklist__button button--del-book">Удалить</button></div></td>';
		if(data.bookNam){
				tBody.replaceChild(newTr, elementToEdit);
				putIdButton();
				closeForm();
		    }else{
				tBody.appendChild(newTr);
				putIdButton();
				closeForm();
		    }
			data.bookName = null;data.bookAutor = null;data.bookYear = null;data.bookPicture = null;data = null;
		 }
	}
	var deleteItem = function(selectedId){
  		var tBody = document.getElementById('booklist__tbody');
  		var elementToDel = tBody.children[selectedId];
  		elementToDel.remove();
  		putIdButton();
	}
		var takeEditData = function(selectedId){
  		var tBody = document.getElementById('booklist__tbody');
  		var elementToEdit = tBody.children[selectedId];
  		var bookPicture = elementToEdit.querySelector('.booklist__item--photo').firstElementChild.src;
  		bookPicture = bookPicture.trim();
  		var bookName = elementToEdit.querySelector('.book__description-name').innerHTML;
  		bookName = bookName.trim();
  		var bookAutor = elementToEdit.querySelector('.book__description-autor').innerHTML;
  		bookAutor = bookAutor.trim();
  		var bookYear = elementToEdit.querySelector('.book__description-year').innerHTML;
  		bookYear = bookYear.trim();
		bookYear = parseInt(bookYear);
  		var bookNam = selectedId;
  		bookNam = bookNam.trim();
		bookNam = parseInt(bookNam);
  		editData(bookNam,bookPicture,bookName,bookAutor,bookYear);
  		putIdButton();
	}
		var editData = function(selectedId,bookPicture,bookName,bookAutor,bookYear){
    	clearInputs();
    	openForm();
    	var editForm = document.getElementById('add-book');
    	editForm.querySelector('#bookName').value=bookName;
    	editForm.querySelector('#bookAutor').value=bookAutor;
    	editForm.querySelector('#bookYear').value=bookYear;
    	editForm.querySelector('#bookPicture').value=bookPicture;
    	editForm.querySelector('#bookNam').value=selectedId;
    	putIdButton();
	};

	var putIdButton = function(){
	var buttons = document.querySelectorAll(".booklist__item--buttons");
	for(var i=0; i<buttons.length;i++){
		buttons[i].id = [i];
		}
	};

function Menu(elem) {
    this.delete = function(butId) {deleteItem(butId);};
    this.edit = function(butId) {takeEditData(butId);};
    var self = this;
    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('data-action');
	    var butId = target.parentNode.id;
      if (action) {
        self[action](butId);
      }
    };
  }

  new Menu(booklist__tbody);
	putIdButton();
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
	document.getElementById('button--save').onclick = function() {
  	checkInputs();
  	createBook(data);
  	putIdButton();
	}
}//закрытие документа
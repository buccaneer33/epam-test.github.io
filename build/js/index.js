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

	var clearPhotoForm = function(){
		var newImg = document.getElementById('open-photo').lastChild;
		newImg.remove();
	};
  var openForm = function() {
		document.getElementById('black--background').classList.remove("visible--disable");
		document.getElementById('add-book').classList.remove("visible--disable");
    };
  var closeForm = function() {
		document.getElementById('black--background').classList.add("visible--disable");
		document.getElementById('add-book').classList.add("visible--disable");
    };
var openPicture = function(){
		document.getElementById('black--background').classList.remove("visible--disable");
		document.getElementById('open-photo').classList.remove("visible--disable");
}
var closePicture = function(){
		document.getElementById('black--background').classList.add("visible--disable");
		document.getElementById('open-photo').classList.add("visible--disable");

}


  var data = {};
  var checkInputs = function(){
		var bookName = document.getElementById('bookName');
		var bookAutor = document.getElementById('bookAutor');
		var bookYear = document.getElementById('bookYear');
		var bookPicture = document.getElementById('bookPicture');
		var bookNam = document.getElementById('bookNam');


		if(bookName.value.length > 3){
				data.bookName=bookName.value;
				var bookNameP = bookName.nextSibling;
				if(bookNameP){bookNameP.remove()}
			}else{
				var bookNameP = bookName.nextSibling;
				if(bookNameP){bookNameP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите название книги (минимум 4 символа)!';
				bookName.parentNode.insertBefore(newP, bookName.nextSibling);
				return false;
  			};
		data.bookNam=bookNam.value;

  		if(bookAutor.value.length > 3){
			data.bookAutor=bookAutor.value;
			var bookAutorP = bookAutor.nextSibling;
			if(bookAutorP){bookAutorP.remove()}
		}else{
				var bookAutorP = bookAutor.nextSibling;
				if(bookAutorP){bookAutorP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите автора книги(минимум 4 символа)!';
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
		if(bookPicture.value.length > 3){
			data.bookPicture=bookPicture.value;
			var bookPictureP = bookPicture.nextSibling;
			if(bookPictureP){bookPictureP.remove()}
			}else{
				var bookPictureP = bookPicture.nextSibling;
				if(bookPictureP){bookPictureP.remove()}
				var newP = document.createElement('p');
				newP.classList.add("p--warning");
				newP.innerHTML = 'Введите адрес изображения книги (минимум 4 символа)!';
				bookPicture.parentNode.insertBefore(newP, bookPicture.nextSibling);
				return false;
			};

		if((data.bookName.value!=='')&&(data.bookAutor.value!=='')&&(data.bookYear.value!=='')&&(data.bookPicture.value!=='')){
		createBook(data);
		}
  };
	var createBook = function(data){
		if((data.bookName.value!=='')&&(data.bookAutor.value!=='')&&(data.bookYear.value!=='')&&(data.bookPicture.value!=='')){
			var tBody = document.getElementById('booklist__tbody');
			var nam = data.bookNam;
			var elementToEdit = tBody.children[nam];
			var newTr = document.createElement('tr');
			newTr.classList.add("booklist__item");
			newTr.innerHTML = '<td class="booklist__item--photo"><img photo-action="openPhoto" src="'+data.bookPicture+'" alt="'+data.bookName+'" width="60px" height="100px"/>     </td><td class="booklist__item--description"><div class="book__description"><h6 class="book__description-name">'+data.bookName+'</h6><span class="book__description-autor">'+data.bookAutor+'</span><span class="book__description-year">'+data.bookYear+' г.</span></div></td><td class="booklist__item--button-block"><div class="booklist__item--buttons"><button data-action="edit" class="booklist__button button--edit-book">Редактировать</button><button data-action="delete" class="booklist__button button--del-book">Удалить</button></div></td>';
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
	var openPhotoForm = function(imageSrc){
		var photoForm = document.getElementById('open-photo');
		var newImg = document.createElement('img');
		newImg.src=imageSrc;
		newImg.classList.add('open-photo__photo');
		photoForm.appendChild(newImg);
		openPicture();
	}


function Menu(elem) {
    this.delete = function(butId) {deleteItem(butId);};
    this.edit = function(butId) {takeEditData(butId);};
	this.openPhoto = function(imageSrc) {openPhotoForm(imageSrc);};
    var self = this;
    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('data-action');
	  var photoAction = target.getAttribute('photo-action');
	  var butId = target.parentNode.id;
	  var imageSrc = target.src;

      if (action) {
        self[action](butId);
      }
	  if (photoAction){
		self[photoAction](imageSrc);
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
  	putIdButton();
	};
	document.getElementById('close-photo').onclick = function() {
  	clearPhotoForm();
  	closePicture();
	};

document.getElementById('bookName').onkeyup = function(event){
event = event || window.event;
if ((event.keyCode == 0xA)||(event.keyCode == 0xD))
 {
	checkInputs();
  	putIdButton();
 return false;
 }
};
document.getElementById('bookAutor').onkeyup = function(event){
event = event || window.event;
if ((event.keyCode == 0xA)||(event.keyCode == 0xD))
 {
	checkInputs();
  	putIdButton();
 return false;
 }
};
document.getElementById('bookYear').onkeyup = function(event){
event = event || window.event;
if ((event.keyCode == 0xA)||(event.keyCode == 0xD))
 {
	checkInputs();
  	putIdButton();
 return false;
 }
};
document.getElementById('bookPicture').onkeyup = function(event){
event = event || window.event;
if ((event.keyCode == 0xA)||(event.keyCode == 0xD))
 {
	checkInputs();
  	putIdButton();
 return false;
 }
};


}//закрытие документа
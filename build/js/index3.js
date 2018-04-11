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
  var checkInputs = function(){
		var data = {};
		var bookName = document.getElementById('bookName');
		var bookAutor = document.getElementById('bookAutor');
		var bookYear = document.getElementById('bookYear');
		var bookPicture = document.getElementById('bookPicture');
		
		if(bookName.value!==''){data.bookName=bookName.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите название книги!';
				bookName.parentNode.insertBefore(newP, bookName.nextSibling);
			};
		if(bookAutor.value!==''){data.bookAutor=bookAutor.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите автора книги!';
				bookAutor.parentNode.insertBefore(newP, bookAutor.nextSibling);
			};	
		if(bookYear.value!==''){data.bookYear=bookYear.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите год издания книги!';
				bookYear.parentNode.insertBefore(newP, bookYear.nextSibling);
			};	
		if(bookPicture.value!==''){data.bookPicture=bookPicture.value}else{
			var newP = document.createElement('p');
				newP.innerHTML = 'Введите адрес изображения книги!';
				bookPicture.parentNode.insertBefore(newP, bookPicture.nextSibling);
			};			
		
	  	//var Inputs = document.getElementsByClassName("add-book__input");
		
		//if(Inputs[0].value!==''){data[0]=Inputs[0];}else{Inputs[0].innerHTML+='<p>Стало.</p>'};
		
		/*for(var i = 0; i < Inputs.length; i++){
			if(Inputs[i].value !== ''){
				data[i]=Inputs[i];
			}
			else{
			alert ('Заполните все поля пожалуйста');
			Inputs[i].innerHTML+='<p>Стало.</p>';
			return false;
			};
		};*/

  };

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
	}
}
window.onload = function () 

	var clearInputs = function(){
		/*var Inputs = document.getElementsByClassName("add-book__input");

		for(var i = 0; i < Inputs.length; i++){
			if(Inputs[i].type == 'text'){
				Inputs[i].value = '';
			}

		};*/
		/*var yearInput = document.getElementsByClassName("add-book__year");
		for(var i = 0; i < yearInput.length; i++){
			if(yearInput[i].type == 'text'){
				yearInput[i].value = '';
			}

		};*/
	}

  var openForm = function() {
      
		document.getElementById('add-book--background').classList.remove("visible--disable");
		document.getElementById('add-book').classList.remove("visible--disable");

    }
  var closeForm = function() {
		
		document.getElementById('add-book--background').classList.add("visible--disable");
		document.getElementById('add-book').classList.add("visible--disable");

    }

	document.getElementById('button__adding-form--open1').onclick = function() {
	openForm()
	}
	document.getElementById('button__adding-form--open2').onclick = function() {
	openForm()
	}
	document.getElementById('button--close').onclick = function() {
	closeForm()
	}
	
}
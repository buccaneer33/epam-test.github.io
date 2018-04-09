$(function() {
	var $window = $(window);
    var blockTop = $('.header__slider').offset().top; //расстояние от верха страницы блока
	var scrollTop = $window.scrollTop(); //значение на сколько проскролили сверху
	var CountUpFlag = 0;
	        if (scrollTop  >= blockTop && CountUpFlag == 0) {
			toggleDownMenu();
            CountUpFlag = 1;
        }
    $window.on('load scroll', function() {
		var scrollTop = $window.scrollTop(); //значение на сколько проскролили сверху
        if (scrollTop  >= blockTop && CountUpFlag == 0) {
			toggleDownMenu();
            CountUpFlag = 1;
        }
		if (scrollTop  <= blockTop && CountUpFlag == 1) {
            toggleUpMenu();
            CountUpFlag = 0;
		}


    });
    function toggleDownMenu() {
		$( '#toggleMenu' ).css({"top":"0", "transition":"0.5s"});

    }
	function toggleUpMenu() {
        $( '#toggleMenu' ).css({"top":"-142px", "transition":"0.5s"});
    }

});

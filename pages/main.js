/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgMenu() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("hamburgMenu");
    if (x.className === "topnav") {
        x.className += " responsive"; 
        icon.innerHTML = "&#9587;" ;
    } else {
        x.className = "topnav";
        icon.innerHTML = "&#9776;" ;
    }
}

//stick navigation bar to the top

$(document).ready(function() {
  
  $(window).scroll(function () {
     
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 600) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 600) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});

//navigation bar hightlight

$('#nav li a').on('click', function(event) {
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function() {
    $('.content').each(function() {
        if($(window).scrollTop() >= $(this).position().top) {
            var id = $(this).attr('id');
            $('#nav li a').removeClass('active');
            $('#nav li a[href=#'+ id +']').addClass('active');
        }
    });
});

// float back-top buttom
var amountScrolled = 450;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-top').fadeIn('slow');
	} else {
		$('a.back-top').fadeOut('slow');
	}
});

$('a.back-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});




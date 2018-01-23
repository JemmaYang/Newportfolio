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


 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.04em solid #666 }";
  document.body.appendChild(css);
};




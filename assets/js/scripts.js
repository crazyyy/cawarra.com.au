$(window).load(function () {

    // Remove the loading screen
	"use strict";
    $('#loading').fadeOut(100);

    if ($('.work-page').is(':visible')) {
        $('#nav').remove();
        $('#footer').remove();
     
    }




});

$(document).ready(function () {



	"use strict";
	
	// Smooth Scroll
	
	$('.menu-item').smoothScroll({
	
		offset: -80,
		speed: 1000
	
	});
	
    // Initialize Project Slider
    $('#featured-slider').liquidSlider();
    $('#work1-slideshow').liquidSlider();


    // Handle Mobile Menu Toggle

    $('#mobile-toggle').click(function () {

        if ($('#nav').hasClass('mobile-menu-open')) {
            $('#nav').removeClass('mobile-menu-open');
        } else {

            $('#nav').addClass('mobile-menu-open');
        }



    });
    
    // Pin the sub-nav to the top
  


    // Turn dynamic animations for iOS devices (because it doesn't look right)

    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }

    // Fade in menu background on anything but an iOS device

    if (iOS === false) {
    

        $(window).on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > 1) {
                $('#nav').addClass('nav-bg');
                $('#logo').removeClass('animated pulse');
                $('.progress-bar').css('width', (st/6.85));

            }
            if (st === 0) {
                $('#nav').removeClass('nav-bg');
				$('.progress-bar').css('width', '0px');
                $('#logo').addClass('animated pulse');
            }
        });
    } else {
        $('#nav').addClass('nav-bg');
    }

    if ($('#contact-page').is(':visible')) {
        $('#nav').addClass('nav-bg');
    }




    // Control Dynamic Content Sliding 

    if (iOS === false) {

        $('.flyIn').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInUpBig');
            }
        });

        $('.flyInFast').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInUp');
            }
        });

        $('.flyRight').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInRightBig');
            }
        });

        $('.flyLeft').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInLeftBig');
            }
        });

        $('.rotate').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated rotatetIn');
            }
        });
    }




    $(".team-image-wrap").mouseenter(function () {
        $(this).children('.social-overlay').fadeIn(200);

    }).mouseleave(function () {
        $(this).children('.social-overlay').fadeOut(200);
    });






    $('.a-service').click(function () {

        if ($(this).hasClass('service-height')) {
            $(this).removeClass('service-height');
            $(this).css('background-color', '');
            $(this).children('h3').css('color', '');
            $(this).children('.p-holder').fadeOut(500);
        } else {

            $(this).addClass('service-height');
            $(this).css('background-color', '#fff');
            $(this).children('h3').css('color', '#57b567');
            $(this).children('.p-holder').fadeIn(1000);

        }



    });

    //Contact Form Code:

    $(function () {
        $(".form-button").click(function (e) {
            var $error = 0;
            var name = $("#form-name").val();
            var email = $("#form-email").val();
            var text = $("#form-msg").val();
            var security = $("#form-security").val();


            if (name === "" || email === "" || text === "") {
                $('#details-error-wrap').fadeIn(1000);
                $error = 1;

            } else {
                $('#details-error-wrap').fadeOut(1000);
            }

            if (security != 8) {
                $('#security-error-wrap').fadeIn(1000);
                $error = 1;

            } else {
                $('#security-error-wrap').fadeOut(1000);
            }

            if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
                $('#details-error-wrap').fadeIn(1000);
                $error = 1;
            }



            var dataString = 'name=' + name + '&email=' + email + '&text=' + text;

            if ($error === 0) {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: dataString,
                    success: function () {
                        $('#details-error-wrap').fadeOut(300);
                        $('#security-error-wrap').fadeOut(300);
                        $('#form-sent').fadeIn(1000);


                        setTimeout(function () {
                            $('#form-holder').addClass('animated bounceOutRight');

                        }, 1500);

                        setTimeout(function () {
                            $('#thankyou-message').fadeIn(1000);

                        }, 1800);




                    }
                });
                return false;
            }

            e.preventDefault();
        });
    });




});
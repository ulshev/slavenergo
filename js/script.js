$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	
	$("#lens_img").imagezoomsl({
		
	    innerzoommagnifier: true,
	    classmagnifier: window.external ? window.navigator.vendor === "Yandex" ? "" : "round-loupe" : "",
	    magnifierborder: "0px solid #F0F0F0",                               // fix ��� Opera, Safary, Yandex		  
	    zoomrange: [1.5, 2],
	    scrollspeedanimate: 2,
	    zoomspeedanimate:3,
	    zoomstart: 1.5,
	    magnifiersize: [180, 180],
	});
	
	
	// �����
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	
	$("#go").on("click", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top -125;
	    $('body,html').animate({scrollTop: top}, 500);
	});
	
	// ����� ��� ���������
	$(window).on('load scroll', function() {
	    if($(this).scrollTop() != 0) {
		$('#header').addClass('scroll');
	    } else {
		$('#header').removeClass('scroll');
	    }
	    
	    if($(this).scrollTop() >= 150) {
		$('#left_menu').addClass('scroll');
	    } else {
		$('#left_menu').removeClass('scroll');
	    }
	});

	// ����� ���� � �������
	$('.main_menu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// �������� �������
	if ( window.innerWidth < 1001 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	
	// �������� ����, ��� ������ �������� ������ 1000 �� � ���������� ��� ������ 1000
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1001) {
			//$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	// �������� � �������� ���� ��� ������� �� ������
	$('.menu_button').click(function(){
		$(".main_menu").toggleClass("show");
		$(this).toggleClass('active');
		$("#logo").toggleClass("toleft");
	});
	
	// �������� �� �������
	if ( window.innerWidth>0 ) {
		$('.main_section').toggleClass("hidden");
		$('#index #header').addClass('hidden');
		$('#main_slide').addClass('animated');
		//$('#header').addClass('animated');
	};
	setTimeout (function(){
		$('#index #header').addClass('animated');
		
	}, 0); 
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	
	$( function() {
	    $( ".accordion" ).accordion({
	      heightStyle: "content",
	      collapsible: true,
	      active: false
	    });
	} );
	
	$('.cont_links a').click(function(){
		var el = $(this).closest('.cont');
		var elIndex = el.index() - 1;
		if (!$('.how_to_get').hasClass('active')){
		  $('.tab_buttons span:not(.active)').click();
		}
		
		$('.accordion h5').eq(elIndex).click();
		  
		return false;
	})
	
	
	$('.more_text_link').html('... <span class="link">�������� ������</span>');

	$('.more_text_link').on('click', function(e){
	  e.preventDefault();
	  
	  var
	    $this = $(this),
	    content = $(this).parents('.text').find('.more_text_block');  
	  
	  
	  if(!$this.hasClass('trigger')){
	    $this.addClass('trigger');
	    $this.html('.');
	    
	    content.slideDown();
	  } else {
	    $this.removeClass('trigger');
	    $this.html('... <span class="link">�������� ������</span>');
	    
	    content.slideUp();
	  }
	});
	
	
	
	$('.production_menu').slick({
	    slidesToShow: 6,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.production_more',
	    vertical: true,
	    swipe: false
	    
	});
	$('.production_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    fade: true,
	    asNavFor: '.production_menu',
	    swipe: false,
	});
	
	
	 
	$('.promotions_more').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.promotions_images',
	    vertical: true,
	    swipe: false,
	    responsive: [
		{
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 1,
		      vertical: false,
		      swipe: true,
		    }
		},
	    ]
	});
	$('.promotions_images').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    fade: true,
	    asNavFor: '.promotions_more',
	    swipe: false,
	    
	    responsive: [
		{
		    breakpoint: 801,
		    settings: {
		      swipe: true,
		      arrows: true,
		      fade: false,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		},
	    ]
	    
	});
	
	
	$('.clients_slider').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    centerMode: false,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    responsive: [
		  {
		    breakpoint: 1501,
		    settings: {
		      vertical: false,
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1201,
		    settings: {
		      slidesToShow: 3,
		      vertical: false,
		    }
		  },
		  {
		    breakpoint: 901,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		  
		  {
		    breakpoint: 451,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		]
	});
	
	
	
	$('.galery').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: true,
	    fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	$('.catalog.slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    centerMode: false,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      vertical: false,
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1100,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		  {
		    breakpoint: 800,
		    settings: {
		      slidesToShow: 1,
		      vertical: false,
		    }
		  },
		]
	});
	
	$('.products_images .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.products_images .small_images',
	    responsive: [
		  {
		    breakpoint: 451,
		    settings: {
		      arrows: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		  },
		]
	  });
	$('.products_images .small_images').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.products_images .main_img',
	    dots: false,
	    //centerMode: true,
	    vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 801,
		    settings: {
		      vertical: false,
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 601,
		    settings: {
		      vertical: true,
		      slidesToShow: 3,
		    }
		  },
		]
	});
	


	jQuery("#parallax").mousemove(
		function(e){
			var offset = jQuery(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;
			var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
			var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);
			jQuery(this).children('.layer3').each(
				function(){
					var diffX = jQuery('#Parallax').width() - jQuery(this).width();
					var diffY = jQuery('#Parallax').height() - jQuery(this).height();
					var myX = diffX * (mouseXPercent / 500);
					var myY = diffY * (mouseYPercent / 1080);
					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					jQuery(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
				}
			);
		}
	);

   
});
$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".scroll_to_footer").on("click", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 90;
	    $('body,html').animate({scrollTop: top}, 500);
	});
	
	// шапка при прокрутке
	$(window).on('load scroll', function() {
	    if($(this).scrollTop() != 0) {
		$('#header').addClass('scroll');
	    } else {
		$('#header').removeClass('scroll');
	    }
	});

	// класс меню с подменю
	$('.main_menu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// открытие подменю
	if ( window.innerWidth < 1001 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	
	// скрываем меню, при ширине браузера меньше 1000 рх и показываем при больше 1000
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1001) {
			//$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	// открытие и закрытие меню при нажатии на бургер
	$('.menu_button').click(function(){
		$(".main_menu").toggleClass("show");
		$(this).toggleClass('active');
		$("#logo").toggleClass("toleft");
		//if ($('.main_menu').class("display") == "block") {
		   //$('.main_menu').slideUp(500);
		//   $('.main_menu').removeClass('show');
		//   $(this).removeClass('active');
		//}else{
		   //$('.main_menu').slideDown(500);
		//   $('.main_menu').addClass('show');
		//   $(this).addClass('active');
		//}
	});
	
	// анимаци€ на главной
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
	
	
	$('.more_text_link').html('... <span class="link">ѕоказать больше</span>');

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
	    $this.html('... <span class="link">ѕоказать больше</span>');
	    
	    content.slideUp();
	  }
	});
	
	
	
	$('.promotions_menu').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.promotions_more',
	    vertical: true
	});
	$('.promotions_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    dots: true,
	    fade: true,
	    asNavFor: '.promotions_menu',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    customPaging: function (slider, i) {
		//FYI just have a look at the object to find aviable information
		//press f12 to access the console
		//you could also debug or look in the source
		console.log(slider);
		return '<strong>0' + (i + 1) + '</strong>/0' + slider.slideCount ;
	    }
	});
	
	$('.projects_menu').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    dots: true,
	    focusOnSelect: true,
	    asNavFor: '.projects_more',
	    vertical: true,
	    centerMode: false,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    customPaging: function (slider, i) {
		//FYI just have a look at the object to find aviable information
		//press f12 to access the console
		//you could also debug or look in the source
		console.log(slider);
		return '<strong>0' + (i + 1) + '</strong>/0' + slider.slideCount ;
	    }
	});
	$('.projects_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    fade: true,
	    asNavFor: '.projects_menu',
	    responsive: [
		  {
		    breakpoint: 801,
		    settings: {
		      arrows: true,
		      dots: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		      customPaging: function (slider, i) {
			//FYI just have a look at the object to find aviable information
			//press f12 to access the console
			//you could also debug or look in the source
			console.log(slider);
			return '<strong>0' + (i + 1) + '</strong>/0' + slider.slideCount ;
		      }
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
	
	
	$(window).on('resize load', function(){
		if ( window.innerWidth>1200 && $('#main_slide .activity').hasClass('slick-initialized') ) {
		    $('#main_slide .activity').slick('unslick');
		} else if ( window.innerWidth<=1200 && !$('#main_slide .activity').hasClass('slick-initialized') ) {
		    $('#main_slide .activity').slick({
		        prevArrow: '<span class="slick-prev"></span>',
		        nextArrow: '<span class="slick-next"></span>',
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        responsive: [
			{
			   breakpoint: 801,
			   settings: { 
			      slidesToShow: 1,
			   }
			},
		       ]
		    });
		}
		
		
		if ( window.innerWidth>1400 && $('.production_block').hasClass('slick-initialized') ) {
		    $('.production_block').slick('unslick');
		} else if ( window.innerWidth<=1400 && !$('.production_block').hasClass('slick-initialized') ) {
		    $('.production_block').slick({
		        prevArrow: '<span class="slick-prev"></span>',
		        nextArrow: '<span class="slick-next"></span>',
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        responsive: [
			{
			   breakpoint: 1030,
			   settings: { 
			      slidesToShow: 3,
			   }
			},
			{
			   breakpoint: 801,
			   settings: { 
			      slidesToShow: 2,
			   }
			},
			{
			   breakpoint: 500,
			   settings: { 
			      slidesToShow: 1,
			   }
			},
		       ]
		    });
		}
		
		if ( window.innerWidth>1000 && $('.advantages').hasClass('slick-initialized') ) {
		    $('.advantages').slick('unslick');
		} else if ( window.innerWidth<=1000 && !$('.advantages').hasClass('slick-initialized') ) {
		    $('.advantages').slick({
		        prevArrow: '<span class="slick-prev"></span>',
		        nextArrow: '<span class="slick-next"></span>',
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        responsive: [
			{
			   breakpoint: 801,
			   settings: { 
			      slidesToShow: 2,
			   }
			},
			{
			   breakpoint: 600,
			   settings: { 
			      slidesToShow: 1,
			   }
			},
		       ]
		    });
		}
		
		if ( window.innerWidth>1400 && $('.services_blocks').hasClass('slick-initialized') ) {
		    $('.services_blocks').slick('unslick');
		} else if ( window.innerWidth<=1400 && !$('.services_blocks').hasClass('slick-initialized') ) {
		    $('.services_blocks').slick({
		        prevArrow: '<span class="slick-prev"></span>',
		        nextArrow: '<span class="slick-next"></span>',
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        responsive: [
			{
			   breakpoint: 651,
			   settings: { 
			      slidesToShow: 1,
			   }
			},
		       ]
		    });
		}
	});
	
	// modal
	$('.order_call').click(function(){
		$('.order_call_button').click();
		return false;
	})

	$('.order_product_button').click(function(){
		$('.order_product_modal .uFormHeading div').text($('h1').text());
		$('.input_product').val($('h1').text());
	})

	$('.services_button').click(function(){
		$('.order_product_button').click();
		return false;
	})
});


$(function() {
	
	$("#headerpage").load("common.html");


/*-------------------------------------------
Load Page
---------------------------------------------*/
		
	$('body').waitForImages({
		finished: function() {
				Website();
		},
		waitForAll: true
	});


/*-------------------------------------------
Ajax link page transitions
---------------------------------------------*/

	$("a.ajax-link").live("click", function(){
		$this = $(this);
		var link = $this.attr('href');
		var current_url = $(location).attr('href');	
		
		if( link != current_url && link != '#' ) { 
		$.ajax({
			url:link,
			processData:true, 
			dataType:'html', 
			success:function(data){
				document.title = $(data).filter('title').text(); 
				current_url = link;
        if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);
        
          setTimeout(function(){						
          $('#preloader').delay(50).fadeIn(600);
          $('html, body').delay(1000).animate({ scrollTop:  0  },1000);						
					
					setTimeout(function(){
							
            $('#ajax-content').html($(data).filter('#ajax-content').html());
            $('#ajax-sidebar').html($(data).filter('#ajax-sidebar').html());

						$('body').waitForImages({
							finished: function() {
								Website();
								backLoading();
								$('.opacity-nav').delay(50).fadeOut(600);
              },										
              waitForAll: true
						});								
					},1000);
					},0);
			}
		});
    }
    return false;
	});


/*-------------------------------------------
When you click back arrow
---------------------------------------------*/


function backLoading() {  
    $(window).on("popstate", function () {
        $('body').fadeOut('slow',function(){
            location.reload();
        });
        $('body').fadeIn();
    });
}   

/*-------------------------------------------
Load Page - next Open Site
---------------------------------------------*/

function Website() {
		Masonry();
//		backgroundmenu();
//		setTimeout(function(){
//			$(".preloader").fadeOut(100);							
//		},1000);
//		setTimeout(function(){
//			$('header').fadeIn();							
//		},100);
}


/*-------------------------------------------
Masonry Check Script
---------------------------------------------*/

function Masonry() {
       var $container = $('.portfolio-grid');
     
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : 'li'
         });
       });
}


/*-------------------------------------------
Multi purpose init Background menu
---------------------------------------------*/

//function backgroundmenu() {
//
//  $(document).ready(function(){
//     if($("#header-fade").length) {
//
//         $(window).scroll(function(){
//            if ($(this).scrollTop() > 10) {
//                $('header').fadeOut();
//            } else {
//                $('header').fadeIn();
//            }
//        }); 
//     }
//     
//     if($("#header-white").length) {
//
//         $(window).scroll(function(){
//            if ($(this).scrollTop() > 10) {
//                $('header').css( "background", "white" );
//                $('header .logo > a').css( "borderBottom", "0" );
//
//            } else {
//                $('header').css( "background", "none" );
//            }
//        }); 
//     }
//
//   
//  });
//
//}

/*-------------------------------------------
Typewriting init script
---------------------------------------------*/

function Typewriting() {


$(document).ready(function(){
	setTimeout( function(){
		if($("#site-type").length) {
        $(".typewrite span").typed({
            strings: ["show case ", "projects "],
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
    }
	}, 3000);
});
}



})//End
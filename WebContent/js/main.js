$(function() {
	
	$("#headerpage").load("common.html");

	/*-------------------------------------------
	 Load Page
	 ---------------------------------------------*/

	$('body').waitForImages({
		finished : function() {
			Website();
			$('body').jKit();
		},
		waitForAll : true
	});

	/*-------------------------------------------
	 When you click back arrow
	 ---------------------------------------------*/

	function backLoading() {
		$(window).on("popstate", function() {
			$('body').fadeOut('slow', function() {
				location.reload();
			});
			$('body').fadeIn();
		});
	}

	/*-------------------------------------------
	 Load Page - next Open Site
	 ---------------------------------------------*/

	function Website() {
		CheckScripts();
		Masonry();
		$('body').jKit();
		backgroundmenu();
		setTimeout(function() {
			$(".preloader").fadeOut(500);
		}, 2000);
		setTimeout(function() {
			$('header').fadeIn();
		}, 500);
	}

	/*-------------------------------------------
	 Init and check list scripts
	 ---------------------------------------------*/

	function CheckScripts() {

		$(document).ready(function() {
			preloaderCheck();
			Typewriting();
			sidebarhero();
			loadPoems();
		});

	}

	function loadPoems() {
		$.post("../admin/getPoems.do", function(data) {
			var array = JSON.parse(data.toString());
			addPoems(array);
		}).fail(function(xhr, statusText, error) {
			alert(statusText + " " + error);
		});

	}
	
	function addPoems(poems){
		for(var i = 0; i < poems.length; i++){
			var temp = "";
			var title = "<h1>" + poems[i]["title"] + "</h1>"
			var content = poems[i]["content"];
			var str = content.split("。");
			for(var j = 0; j < str.length-1; j++){
				temp += "<p>" + str[j] + "</p>";
			}
			if(str.length > 5){
				temp += "<p>......</p>";
			}
			document.getElementsByClassName("text-poem")[i].innerHTML = temp;
			document.getElementsByClassName("grid-hover")[i].innerHTML = title;
		}
	}

	/*-------------------------------------------
	 Masonry Check Script
	 ---------------------------------------------*/

	function Masonry() {
		var $container = $('.portfolio-grid');
		$container.imagesLoaded(function() {
			$container.masonry({
				itemSelector : 'li'
			});
		});
	}

	/*-------------------------------------------
	 Multi purpose init Background menu
	 ---------------------------------------------*/
	function backgroundmenu() {

		$(document).ready(function() {
			if ($("#header-fade").length) {

				$(window).scroll(function() {
					if ($(this).scrollTop() > 10) {
						$('header').fadeOut();
					} else {
						$('header').fadeIn();
					}
				});
			}

			if ($("#header-white").length) {

				$(window).scroll(function() {
					if ($(this).scrollTop() > 10) {
						$('header').css("background", "white");
						$('header .logo > a').css("borderBottom", "0");

					} else {
						$('header').css("background", "none");
					}
				});
			}

		});

	}

	/*-------------------------------------------
	 Typewriting init script
	 ---------------------------------------------*/

	function Typewriting() {

		$(document).ready(function() {
			setTimeout(function() {
				if ($("#site-type").length) {
					$(".typewrite span").typed({
						strings : [ "show case ", "projects " ],
						typeSpeed : 100,
						backDelay : 500,
						loop : false,
						contentType : 'html', // or text
						// defaults to false for infinite loop
						loopCount : false,
					});
				}
			}, 3000);
		});
	}

	/*-------------------------------------------
	 Amazing Fade with scroll Sidebar
	 ---------------------------------------------*/

	function sidebarhero() {

		if ($("#hero").length) {
			var fadeStart = 100, fadeUntil = 800, fading = $('#hero');

			$(window).bind('scroll', function() {
				var offset = $(document).scrollTop(), opacity = 0;
				if (offset <= fadeStart) {
					opacity = 1;
				} else if (offset <= fadeUntil) {
					opacity = 1 - offset / fadeUntil;
				}
				fading.css('opacity', opacity);
			});
		}
	}

	/*-------------------------------------------
	 Open Check Scription
	 ---------------------------------------------*/

	function OpenCheck() {
		setTimeout(function() {
			hidePreloader();
		}, 1000);
	}

	/*-------------------------------------------
	 Check Preloader
	 ---------------------------------------------*/

	function preloaderCheck() {
		showPreloader();
		$(window).load(function() {
			hidePreloader();
		});
	}

	/*-------------------------------------------
	 Functions Show / Hide Preloader
	 ---------------------------------------------*/

	function showPreloader() {
		$(".preloader").fadeIn("slow");
	}

	function hidePreloader() {
		$(".preloader").delay(2000).fadeOut("slow");
	}

})// End

(function (window, document, $, undefined) {
    var appmm = {
        WINDOW_HEIGHT: $(window).height(),
        WINDOW_WIDTH: $(window).width(),
        isMobile: false,
        isTouch: false,
        isTablet: false,
        resizeTimeoutID: null,
        $body: $("body"),
        isMouseDown: false,
        slider: null,
        navSticky: function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                var logosHeight = $('header .row:first-child').height()
                if (scroll >= logosHeight) {
                    $("header nav").addClass("nav-sticky");
                    $('body').css({ 'padding-top': '50px' })
                } else {
                    $("header nav").removeClass("nav-sticky");
                    $('body').css({ 'padding-top': '0' })
                }
            });
        },
        blindMode: function () {
            $(".blind").change(function () {
                $("body").removeClass("blind-default blind-color blind-green blind-red");
                var $class = $(this).attr("data-body-class");
                $("body").addClass($class);
                setCookie("blind-mode", $class, 1);


                console.log('clicked here');
            });
            if (getCookie("blind-mode") != "") {
                //console.log('running here');
                $("body").addClass(getCookie("blind-mode"));
                // console.log("test")
                $('input.' + getCookie("blind-mode")).attr('checked', true);
            }
            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toGMTString();
                document.cookie = cname + "=" + cvalue + "; " + expires + "domain=." + location.hostname + ";path=/";
            }
        },
        accessibility: function () {
            $('body').click(function () {
                $("header .accessibility").removeClass("active");
                $('.access-droDown').hide();
            });
            $('.accessibility > h2').click(function () {
                $(".accessibility").toggleClass("active");
                $(".access-droDown").toggle();
                //$(".fade-body").toggle();
            });
            $('.access-droDown .container-1200, .accessibility > h2, .access-droDown').click(function (e) {
                e.stopPropagation();
            });
        },
        eyeIcon: function () {
            $(".eye-icon").click(function () {
                if ($("body").hasClass("blind-red")) {
                    $("body").removeClass('blind-red');
                    setCookie("blind-mode", false, 1);
                }
                else {
                    $("body").addClass('blind-red');
                    setCookie("blind-mode", true, 1);
                }
                console.log(getCookie("blind-mode"))
            });
            if (getCookie("blind-mode") === "true") {
                $("body").addClass("blind-red");
            }
            $(".speech, .print-page, .nav-btn").click(function () {
                $(".eye-inner").fadeOut();
            });
            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toGMTString();
                document.cookie = cname + "=" + cvalue + "; " + expires + "domain=." + location.hostname + ";path=/";
            }
        },
        menuAb: function () {
            if (screenWidth <= 768) {
                $("ul.main_nav_bar > li.has_submenu a").on("touched", function () {
                    $(this).next().show();
                    //return false;
                });
            }
        },

        // Start megamenu
        megaMenu: function () {
            //fadeBoday

            /*$('header nav').hover(
                function () {
                    $(".fade-body").show();
                },
                function () {
                    $(".fade-body").hide();
                }
            );*/


            $("ul.main_nav_bar li").mouseenter(function () {
                if (screenWidth > 768) {
                    //console.log("mouseenter")
					$(".fade-body").show();
                    var $me = $(this);
                    $me.siblings().find("a:first").removeClass("menu_item_active");
                    $me.siblings().find("p:first").removeClass("menu_item_text_active");
                    //$me.siblings().find("img").show();
                    $me.siblings().find(".img_over").hide();
                    //$me.find("span img").hide();
                    $me.find(".img_over").show();
                    $me.find("a:first").addClass("menu_item_active");
                    $me.find("p:first").addClass("menu_item_text_active");
                    $me.find(".second-menu").slideDown();
                }
            });
            $("ul.main_nav_bar li").mouseleave(function () {
                if (screenWidth > 768) {
					$(".fade-body").hide();
                    $("ul.main_nav_bar > li .full-grid.active-fast").hide();
                    var $me = $(this);
                    $me.find("a:first").removeClass("menu_item_active");
                    $me.find("p:first").removeClass("menu_item_text_active");
                    //$me.find("img").show();
                    $me.find(".img_over").hide();
                    $(this).find(".second-menu").hide();
                }
            });
            //Remove Arrow
            $("header nav ul .first-sub-menu li em").parent().addClass("arrow-none");
            //Menu
            $("header nav ul ul.first-sub-menu ul.second-sub-menu, header nav ul ul.first-sub-menu ul.third-sub-menu, header nav ul ul.first-sub-menu ul.fourth-sub-menu").parent().parent().addClass("list-space");
            $("header nav ul ul.first-sub-menu ul.second-sub-menu, header nav ul ul.first-sub-menu ul.third-sub-menu, header nav ul ul.first-sub-menu ul.fourth-sub-menu").parent().addClass("arrow-sub-menu");
            $('header nav ul .first-sub-menu.list-space > li.arrow-sub-menu').click(
                function (event) {
                    $(".second-sub-menu").hide();
                    $('header nav ul .first-sub-menu.list-space > li.arrow-sub-menu').removeClass("inner-active-link");
                    $(this).addClass("inner-active-link");
                    $(this).find(".second-sub-menu").show();
                }
            );
            $('header nav ul .second-sub-menu.list-space > li.arrow-sub-menu').click(
                function () {
                    $(".third-sub-menu").hide();
                    $('header nav ul .second-sub-menu.list-space > li.arrow-sub-menu').removeClass("inner-active-link")
                    $(this).addClass("inner-active-link");
                    $(this).find(".third-sub-menu").show();
                }
            );
            $('header nav ul .third-sub-menu.list-space > li.arrow-sub-menu').click(
                function () {
                    $(".fourth-sub-menu").hide();
                    $('header nav ul .third-sub-menu.list-space > li.arrow-sub-menu').removeClass("inner-active-link")
                    $(this).addClass("inner-active-link");
                    $(this).find(".fourth-sub-menu").show();
                }
            );
            //Mooblie onClick Dropdown
            $('header nav ul > li > ul > li').click(
                function () {
                    $(this).find(".full-grid").fadeIn();
                }
            );
            $(".full-grid .back-arrow").parent().addClass("backArrow-desktopHide");
            $(".full-grid .back-arrow").click(
                function () {
                    var $this = $(this);
                    if ($this.parent().parent().hasClass("first-sub-menu")) {
                        $(".full-grid").fadeOut();
                        return false;
                    }
                    else {
                        $this.parent().parent().fadeOut();
                    }
                }
            );
            $('.shortMenu a').focus(function () {
                //console.log( $(this).parent());
                $(this).parent().siblings().find('.full-grid').hide();
            });


            $('#resetsetting').click(function () {
                $("body").removeClass("blind-default blind-color blind-green blind-red");
                $("body").removeClass('large');
                $("body").removeClass('small');
                $("body").removeClass('medium');
                $('body').addClass('normal');
                $('.blind').prop('checked', false);
                $('a.reset-font.plus').removeClass('large-font').addClass('medium-font');
                setCookie("blind-mode", 'blind-default', 1);
                return false;

            });

            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toGMTString();
                document.cookie = cname + "=" + cvalue + "; " + expires + "domain=." + location.hostname + ";path=/";
            }

        },
        fontSize: function () {

            $('.minus.reset-font').click(function () {
                $('.plus.reset-font').removeClass('medium-font').addClass('normal-font')
            });
            $(".reset-font").click(function () {
                var navHeight = $('nav.container-fluid').height();
                $('.header-right > div').css({ 'height': navHeight });
                //$('.plus.reset-font').removeClass('medium-font').addClass('normal-font').attr("data-font", "normal");

                $me = $(this);




                if ($me.hasClass("medium-font")) {
                    $me.removeClass("medium-font");
                    $me.addClass("large-font");
                    $me.attr("data-font", "medium");
                } else if ($me.hasClass("large-font")) {
                    $me.removeClass("large-font");
                    $me.addClass("normal-font");
                    $me.attr("data-font", "large");
                } else if ($me.hasClass("normal-font")) {
                    $me.removeClass("normal-font");
                    $me.addClass("medium-font");
                    $me.attr("data-font", "normal");
                }

                $("body").removeClass("medium large normal small").addClass($(this).attr("data-font"));

                $('header nav ul > li.shortMenu').removeClass(function (index, className) {
                    return (className.match(/(^|\s)set-\S+/g) || []).join(' ');
                }).removeAttr('style');
                $("body").removeClass("menu-default-slider")
                $("header nav .secondary-nav span.next, header nav .secondary-nav span.pre").unbind();
                $('header nav .secondary-nav span.next').removeClass('disabled');
                setTimeout(function () {
                    var containerWidth = $(".main_nav_bar").outerWidth();
                    var liWidth = 0;
                    var counter = 0;
                    var li = $("nav ul li.shortMenu");
                    var i = 0
                    li.each(function (index) {
                        liWidth += $(this).outerWidth();
                        if ((containerWidth) <= liWidth) {
                            liWidth = $(this).outerWidth();
                            counter += 1;
                        }
                        else {
                        }
                        $(this).addClass("menu-group set-" + counter);
                    });
                    //console.log(counter);
                    if (counter === 0) {
                        //$("header nav .secondary-nav span.next,header nav .secondary-nav span.pre").hide();
                        $("header nav .secondary-nav span.next,header nav .secondary-nav span.next").addClass('disabled');
                        $("header nav .secondary-nav span.next,header nav .secondary-nav span.pre").addClass('disabled');
                    } else if (counter === 1) {
                        $("header nav .secondary-nav span.next,header nav .secondary-nav span.next").removeClass('disabled');
                    }
                    $(".large header nav .secondary-nav span.next, .medium header nav .secondary-nav span.next, .normal header nav .secondary-nav span.next, .small header nav .secondary-nav span.next").click(function () {
                        if (i == counter) {
                            return false
                        }
                        $("nav ul li.shortMenu.set-" + i).hide();
                        $("header nav .secondary-nav span.pre,header nav .secondary-nav span.next").removeClass("disabled");
                        i += 1;
                        if (i == counter) {
                            $(this).addClass("disabled");
                        }
                        $("nav ul li.shortMenu.set-" + i).show();
                    });
                    $(".large header nav .secondary-nav span.pre, .medium header nav .secondary-nav span.pre, .normal header nav .secondary-nav span.pre, .small header nav .secondary-nav span.pre").click(function () {
                        if (i == 0) {
                            return false
                        }
                        $("header nav .secondary-nav span.pre,header nav .secondary-nav span.next").removeClass("disabled");
                        $("nav ul li.shortMenu.set-" + i).hide();
                        i -= 1;
                        if (i == 0) {
                            $(this).addClass("disabled");
                        }
                        $("nav ul li.shortMenu.set-" + i).show();
                    })
                }, 30);
            });


        },
        search: function () {
            $(".search").click(function () {
                $(".search .close-x, .search-box").toggle();
                $(".search .close-x").click(function () {
                    $(".search .close-x, .search-box").fadeOut();
                });
                $(".search").toggleClass('active');
                var textDefault = $(this).data('default');
                var dataText = $(this).data('text');
                if ($(this).hasClass('active')) {
					$(".fade-body").show();
                    $(this).find('span').text(dataText);
                    //$(this).find('img').attr('src', '/wps/contenthandler/dav/fs-type1/themes/RTA.Responsive.Theme/rta-assets/common/img/latest-img/X.png');
                } else {
					$(".fade-body").hide();
                    $(this).find('span').text(textDefault);
                    $(this).find('img').attr('src', '/wps/contenthandler/dav/fs-type1/themes/RTA.Responsive.Theme/rta-assets/common/img/latest-img/search-icon-en.png');
                }
            });

            /*
			
			commented to avoid to opening the search bar when it gets focus
			
			$('.search-action-btn').focusout(function () {
                $(".search").trigger('click');
            })
            $('.shortMenu a').mouseover(function () {
                if ($('.search').hasClass('active')) {
                    $(".search").trigger('click');
                }
            });*/

            $(document).mouseup(function (e) {
                var container = $(".search");
                var containersafe = $(".search-box");
                if (!container.is(e.target) && container.has(e.target).length === 0 && !containersafe.is(e.target) && !containersafe.has(e.target).length){
                    if ($('.search').hasClass('active')) {
                        $('.search').trigger('click');
                    }
                }
            });

            //$('body').click(function(){
            //    $('.full-grid').removeClass('tabbed-open');
            //});

        },
        mobileNav: function () {
            $('.menu-btn').click(function () {
                //$('html').toggleClass('stop-scrolling');
                var wh = window.innerHeight - 120;
                if (window.innerHeight <= 414) {
                    $('.main_nav_bar').css({ 'overflow': 'scroll' });
                    //$('header nav .secondary-nav > ul.active').css({'overflow': 'scroll', 'height': wh});
                }
                //$('.main_nav_bar').css('height', wh);
                $(this).toggleClass('active');
                if ($(".main_nav_bar").hasClass('active')) {
                    $(".main_nav_bar").slideUp();
                    $('.mobile-accessibility').slideUp();
                    $(".main_nav_bar").removeClass('active');
                    $('.acc-mode').slideUp();
                } else {
                    $('.main_nav_bar').slideDown();
                    $('.mobile-accessibility').slideDown();
                    $('.main_nav_bar').addClass('active');
                }
                $('.menu-col + ul').fadeOut();
                $('.menu-col').removeClass('active');
            });
            /*$('.menu-col').click(function () {
                var $this = $(this);
                if ($this.hasClass('active')){
                    $(".menu-col + ul").slideUp();
                    $('.menu-col.active').removeClass('active');
                    $(this).addClass('disable');

                } else {
                    $(".menu-col + ul").slideUp();
                    $this.next('ul').slideDown();
                    $('.menu-col.active').removeClass('active');
                    $(this).addClass('active');
                    $(this).removeClass('disable');
                }
            });*/
            $('.menu-col-sub-menu a').click(function () {
                $(this).siblings('.menu-col-inner-menu').show();
            });
            $('.back-icon').click(function () {
                $('.menu-col-inner-menu').hide();
            });
            $('.m-search').click(function () {
                $('.mbl-search-bar').slideDown();
            });
            $('.back-btn').click(function () {
                $('.mbl-search-bar').slideUp();
            });
            $('.m-acc').click(function () {
                $(this).addClass('active');
                $('.acc-mode').slideDown();

            });
            $('.close-access').click(function () {
                $('.acc-mode').slideUp()
                $('.m-acc').removeClass('active');

            });
            $('.shortMenu > a').click(function () {
                $(this).parent().find('full-grid').fadeIn();
            });
            //$(".menu-col:not(:first-child)").click(function () {
            //    // Hide any of the content tabs
            //    $(".submenus").fadeOut();
            //
            //    $('.m-menu.active').removeClass('active');
            //    $(this).closest('li').addClass('active');
            //});
            //$('.m-menu').click(function(){
            //    $(this).find('a').removeClass('active');
            //    $(this).find('a').toggleClass('active');
            //
            //});
        },
        leftStickey: function () {
            var headerHeight = $('header').innerHeight();
            $('.service-sticky').css('top', headerHeight)
        },
        megaMenuSlider: function () {
            $("body").addClass('menu-default-slider');
            var containerWidth = $(".main_nav_bar").outerWidth();
            var liWidth = 0;
            var counter = 0;
            var li = null;
            var i = 0;
            $("nav ul.main_nav_bar > li").each(function () {
                if ($(this).hasClass('hide-desktop')) {
                }
                else {
                    li = $(this).find("li.shortMenu")
                }
            });
            //console.log(li.length)
            li.each(function (index) {
                //       console.log(index)
                liWidth += $(this).outerWidth();
                if ((containerWidth) <= liWidth) {
                    liWidth = $(this).outerWidth();
                    counter += 1;
                }
                else {
                }
                $(this).addClass("menu-group set-" + counter);
            });
            if (counter === 0) {
                $("header nav .secondary-nav span.next,header nav .secondary-nav span.pre").hide();
            }
            $(".menu-default-slider header nav .secondary-nav span.next").click(function () {
                if (i == counter) {
                    return false
                }
                console.log(i + " : Counter Main");
                $("nav ul li.shortMenu.set-" + i).hide();
                $("header nav .secondary-nav span.pre,header nav .secondary-nav span.next").removeClass("disabled");
                i += 1;
                if (i == counter) {
                    $(this).addClass("disabled");
                }
                $("nav ul li.shortMenu.set-" + i).show();
            });
            $(".menu-default-slider header nav .secondary-nav span.pre").click(function () {
                if (i == 0) {
                    return false
                }
                $("header nav .secondary-nav span.pre,header nav .secondary-nav span.next").removeClass("disabled");
                $("nav ul li.shortMenu.set-" + i).hide();
                i -= 1;
                if (i == 0) {
                    $(this).addClass("disabled");
                }
                $("nav ul li.shortMenu.set-" + i).show();
            })

            $('.first-sub-menu').each(function () {
                var itemLength = $(this).children().size();
                if (itemLength > 6) {
                    $(this).next().addClass('active');
                }
            });
        },
        dskVersion: function () {
            $('#view_dsk').on('click', function () {
                setCookie("desktop-mode", true, 100);
                $('meta[name="viewport"]').prop('content', 'width= 1272, initial-scale = 0');
                $('.menu-btn').removeClass('active');
                $('.main_nav_bar').removeClass('active').hide();
                $('.mobile-accessibility').hide();
                $('.view-mobile').addClass('active');
                window.location.reload();
            });

            $('.view-mobile').click(function () {
                setCookie("desktop-mode", false, 100);
                $('meta[name="viewport"]').prop('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
                $('.view-mobile').removeClass('active');
                window.location.reload();
            });

            if (getCookie("desktop-mode") == 'true') {
                $('meta[name="viewport"]').prop('content', 'width= 1272, initial-scale=0');
                $('.view-mobile').addClass('active');
            }


            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toGMTString();
                document.cookie = cname + "=" + cvalue + "; " + expires + "domain=." + location.hostname + ";path=/";
            }
        },
        loginDropdown: function () {
            $('body').click(function () {
                $(".login-n-register").removeClass("active");
                $('.login-n-register .login-dropdown').hide();
            });
            $('.login-n-register a').click(function () {
                $(".access-droDown").hide();
                $(".login-n-register").toggleClass("active");
                $(".login-n-register .login-dropdown").toggle();
            });
            $('.login-n-register a, .login-n-register .login-dropdown').click(function (e) {
                e.stopPropagation();
            });
            $('.login-n-register .login-dropdown a:last-child').focusout(function () {
                $(".login-dropdown a").trigger('click');
            })

            $('.red-arrow-btn').focusout(function () {
                $('.accessibility > h2').trigger('click');
            })
        },
        skipMenu: function () {


        },
        // End megamenu
        init: function () {
            appmm.blindMode();
            appmm.accessibility();
            appmm.eyeIcon();
            appmm.menuAb();
            appmm.mobileNav();
            // Start megamenu
            setTimeout(function () {
                appmm.megaMenuSlider();
            }, 200);
            appmm.leftStickey();
            appmm.search();
            appmm.megaMenu();
            appmm.fontSize();
            appmm.dskVersion();
            appmm.loginDropdown();
            appmm.skipMenu();
            appmm.navSticky();
            //alert("hello");

            // End megamenu
        }
    };
    window.appmm = appmm;
})
    (window, document, jQuery);

(function(a) {
	window.isPhoneTest = /\bi?Phone\b|(?=.*\bAndroid\b)(?=.*\bMobile\b)|(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i.test(a);
})(navigator.userAgent || navigator.vendor || window.opera);
var isPhoneRs=(window.isPhoneTest ? true : false);
$(document).ready(function () {
    appmm.init();
	$(".search__trigger .search").on('click',function(){
		$("#search_part .search-action-btn").focus();
	});
	try{
		$("#readSpeakerID").on('click',function(){
			if(isPhoneRs & typeof $("#rsmod_Styles") !== 'undefined'&& $("#rsmod_Styles")!=null && typeof $("#rsmod_Styles").attr('href')!='undefined' && $("#rsmod_Styles").attr('href').indexOf('ReadSpeaker.Styles-Mobile.css') == -1){
				
				$("#rsmod_Styles").attr('href','https://f1-eu.readspeaker.com/script/8316/webReader/r/r830/ReadSpeaker.Styles-Mobile.css?v=3.1.4.830');
			}
		})	
	}catch (e) {
		
	}
	
});
// 
function getKeyCode(key) {
    //return the key code
    return (key == null) ? event.keyCode : key.keyCode;
}
var $previousActiveElement = null;
var $lastMenuItem = false;
var focusInMenu = false;
var $previousForVoiceSearch=null;
var tabPressed = false;
var $searchDesktop = null;
	
$(document).on('keyup', function (eventObj) {
	
	var trueGridCondtion = $("#main_nav_part ul.main_nav_bar a").hasClass("menu_item_active");
    var fullGrid = $("#main_nav_part ul.main_nav_bar a.menu_item_active").parent(".has_submenu").find(".full-grid");
    $searchDesktop = $(".search__trigger .search");  
    if (getKeyCode(eventObj) == '9') {
        /*Maiyappan: added for accessibility onfocusout by tab close the search as on 10-09-2019*/
		 if($previousForVoiceSearch!=null && $searchDesktop.hasClass('active') &&
			(($previousForVoiceSearch.is('#search_part .voice-search') && $(".search-autosuggest").is(":hidden") && !$(document.activeElement).is('#searchKW')) ||
			($previousForVoiceSearch.is('#searchKW') && $(".search-autosuggest").is(":hidden") && !$(document.activeElement).is('#search_part .search-action-btn') && $("#search_part .voice-search").is(":hidden")))//this is added of IE
			) {
				console.log("hide search box >> " );
				$(".search__trigger .search").focus();
				/*$searchDesktop.toggleClass('active');
				$searchDesktop.find('img').attr('src', '/wps/contenthandler/dav/fs-type1/themes/RTA.Responsive.Theme/rta-assets/common/img/latest-img/search-icon-en.png');
				$(".search-box.search__box-2").hide();*/
				
				
			}else if($previousForVoiceSearch!=null  && $(".search-autosuggest").is(":visible") && $previousForVoiceSearch.is('.search-autosuggest ul li:last-child a') && !$(document.activeElement).is('.search-autosuggest ul li a')){
				$(".search__trigger .search").focus();
			}
     
		/*
		Maiyappan: commented, old functionality not required as on 10-09-2019
		if($("#idle-user-popup").is(":visible")) {
			if($(".fancybox-item.fancybox-close").next().length==0){
				$(".fancybox-item.fancybox-close").attr('id','popupclose');
				$(".fancybox-item.fancybox-close").after('<a id="popupclosedummy" tabindex="0" class=" fancybox-item fancybox-close sr-only" href="#">.</a>');
			}
			if(!($previousActiveElement!=null && $("#idle-user-popup").has(	$previousActiveElement).length>0  )){
				if(!($($previousActiveElement).hasClass("fancybox-close"))){
					
					$("#open-chat-window").focus();
				}else if ($($previousActiveElement).hasClass("sr-only")){	
					
					$("#open-chat-window").focus();
				}
				
			} 
			
		}*/
		/* !$("#idle-user-popup").is(":visible") && */
		if($("#faqs.overlay-questions").is(":visible")){
            
			if($("#faqs.overlay-questions a.btn-custom").next().length==0){
				$("#faqs a.close-sticky.close-question").attr("tabindex","0");
				$("#faqs.overlay-questions a.btn-custom").after('<a id="faqpopupclosedummy" tabindex="0" class="sr-only" href="#">.</a>');
			}
			if($previousActiveElement!=null && $($previousActiveElement).hasClass('sr-only')){
			
				$("#faqs a.close-sticky.close-question").focus();
			}
			
        }
		/* !$("#idle-user-popup").is(":visible") && */
		if($("#notify").is(":visible")){
			if($("#notify .question-search.notifications ul").next().length==0){
				$("#notify .question-search.notifications ul").after('<a id="notifypopupclosedummy" tabindex="0" class="sr-only" href="#">.</a>');
			}
            
			if($previousActiveElement!=null && $($previousActiveElement).hasClass('sr-only')){
				$("#notify a.close-sticky.close-question").focus();
			}
        }

		
        if ($previousActiveElement != null) {
            $previousActiveElement.removeClass("active-shadow");
            //$lastMenuItem = true;
            if ($lastMenuItem) {
                $previousActiveElement.trigger("mouseleave");
                $lastMenuItem = false;
            }
			
        }
        var $mainMenuLink = $(document.activeElement);
        $mainMenuLink.addClass("active-shadow");
        if ($mainMenuLink.parents(".menu-group").length === 1) {
            focusInMenu = true;
        }
        if ($mainMenuLink.parents(".menu-group").length === 0) {
            if (focusInMenu) {


                if (!($("header nav .secondary-nav span.next").hasClass("disabled") || $("header nav .secondary-nav span.next").css("display") === 'none')) {
                    $(".menu-default-slider header nav .secondary-nav span.next").trigger("click");
                    $(".menu-default-slider header nav .secondary-nav span.next a").removeClass("active-shadow");
                    $("header nav .secondary-nav > ul > li > ul > li:visible a").eq(0).addClass("active-shadow").focus();
                    //if ($("header nav .secondary-nav > ul > li > ul > li:visible").eq(0).hasClass("has_submenu")) {
                    //    $("header nav .secondary-nav > ul > li > ul > li:visible").eq(0).find('.full-grid').addClass('tabbed-open');
                    //}
                }

            }
        }
        //console.log($mainMenuLink);
        //if ($mainMenuLink.parent().hasClass('has_submenu')) {
        //    $('.tabbed-open').removeClass('tabbed-open');
        //}
        /*
		/*Maiyappan: commented to avoid to opening the search bar when it gets focus as on 10-09-2019 
		if ($mainMenuLink.hasClass('search')) {
           	//	console.log("inside search >> $previousActiveElement >>" + $previousActiveElement);
			if(!($previousActiveElement !=null && ($previousActiveElement.hasClass('search-action-btn') ||  $previousActiveElement.hasClass('search-action-btn')))){
				$('.search').trigger('click');
				$('#searchKW').focus();
			}
            //alert("hello search");
        }*/
        if ($mainMenuLink.hasClass('login-n-register a')) {
            $('.login-n-register a').trigger('click');
        }
        //$mainMenuLink.siblings('.full-grid').addClass('tabbed-open');
        $previousActiveElement = $mainMenuLink;
        var $liElement = $mainMenuLink.parent();
        if (trueGridCondtion) {
            fullGrid.addClass("active-fast");
        }
        if ($mainMenuLink.parent().parent().hasClass('main_nav_bar')) {
            fullGrid.addClass("active-fast");
        }
        //if( ===1){
        //    console.log()
        //    $mainMenuLink.parents(".menu-group")
        //
        //}
		$previousForVoiceSearch = $(document.activeElement);

    } else if (getKeyCode(eventObj) == '13') {
		/**Commented by Bala to avoid repeted clicks while pressing Enter across website. Need to be tested for breakeges in existing functionalities**/
        var $activeLink = $(document.activeElement);
	   /*
		if(!($previousActiveElement!=null && $($previousActiveElement).hasClass('close-sticky close-question')) || ($($previousActiveElement).hasClass('close-sticky close-question')&& $("#faqs").is(":visible")))
			$activeLink.trigger('click');*/
		if($activeLink.hasClass("openHwidget") || $activeLink.hasClass("supportMenuBtn")){

			$activeLink.trigger('click');
			
		}
		if($activeLink.is(".search__trigger .search") && $activeLink.data("default") != '' && $activeLink.data("text") != ''){

			$activeLink.trigger('click');
		}
    } else if (getKeyCode(eventObj) == '16') {
        if (!trueGridCondtion) {
            fullGrid.removeClass("active-fast");
        }	
		if($(".search__trigger .search").hasClass('active') && $(document.activeElement).parents("#search_part").length!=1&& $(document.activeElement).parents(".search__trigger").length!=1){
			if($(".search-autosuggest").is(":visible")){
				if($('.search-autosuggest ul li:last-child').find('a').length==1){
					$('.search-autosuggest ul li:last-child a').focus();
				}else if($("#search_part .voice-search").is(":hidden")){
					$('#searchKW').focus();	
				}else{
					$("#search_part .voice-search").focus();	
				}
			}else if($("#search_part .voice-search").is(":hidden")){
				$('#searchKW').focus();	
			}else{
				$("#search_part .voice-search").focus();	
			}

		}
    }
});
function skipNavigation(e) {
    $('.search').trigger('click');
    $("#searchKW").focus();
    e.preventDefault();
    $("#skipNavigation").removeClass("focusSkip");
    $("#skipNavigation").removeClass("active-shadow");
}

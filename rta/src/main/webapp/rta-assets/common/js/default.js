(function (window, document, $, undefined) {
    var app = {
        WINDOW_HEIGHT: $(window).height(),
        WINDOW_WIDTH: $(window).width(),
        isMobile: false,
        isTouch: false,
        isTablet: false,
        resizeTimeoutID: null,
        $body: $("body"),
        isMouseDown: false,
        slider: null,
        detectDevice: function () {
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    app.isMobile = true;
                }
            })(navigator.userAgent || navigator.vendor || window.opera);
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
                app.isTouch = true;
                app.$body.addClass("touch");
            } else {
                app.$body.addClass("no-touch");
            }
            app.isTablet = (!app.isMobile && app.isTouch);
        },
        resizeListener: function () {
            if (!app.isTouch) {
                $(window).resize(function () {
                    clearTimeout(app.resizeTimeoutID);
                    app.resizeTimeoutID = setTimeout(app._windowResize, 500);
                });
            } else {
                window.addEventListener('orientationchange', function () {
                    app._windowResize();
                });
            }
        },
        _windowResize: function () {
            app.WINDOW_HEIGHT = $(window).height();
            app.WINDOW_WIDTH = $(window).width();
        },
        initAppScroll: function () {
            // mobile-apps-detial-container
            //console.log(app.isMobile);
            $('.mobile-serv-hover a').click(function () {
                $('html,body').animate({
                        scrollTop: $(".mad-container").offset().top - (app.isMobile ? -10 : 50)
                    },
                    'slow');
                //console.log("mobile-apps-detial-container")
            })
        },
        smoothScroll: function () {
            $('.car-services li a[href^="#"]').click(function () {
                var target = $(this.hash);
                if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
                if (target.length == 0) target = $('html');
                $('html, body').animate({scrollTop: target.offset().top - 110}, 500);
                return false;
            });
            if ($(window).width() >= 768) {
                $('.services-detail-head ul li a[href^="#"]').click(function () {
                    var target = $(this.hash);
                    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
                    if (target.length == 0) target = $('html');
                    $('html, body').animate({scrollTop: target.offset().top - 140}, 500);
                    return false;
                });
            }
            $(".scroll-smooth").click(function () {
                var target = $(this.hash);
                if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
                if (target.length == 0) target = $('html');
                $('html, body').animate({scrollTop: target.offset().top - 96}, 500);
                return false;
            });
        },
        matchHeight: function () {
            if ($(".matchHeight").length >= 1) {
                $('.matchHeight').matchHeight();
            }
        },
        bxSlider: function () {
            var isArabic = $('body').hasClass('lang-ar');
            var swiperStatus = $('.smart-app .swiper-container').length;
            // console.log(swiperStatus);
            if (swiperStatus) {
                var swiper = new Swiper('.smart-app .swiper-container', {
                    nextButton: '.smart-app .swiper-button-next',
                    prevButton: '.smart-app .swiper-button-prev',
                    slidesPerView: 3,
                    spaceBetween: 30,
                    breakpoints: {
                        991: {
                            slidesPerView: 2
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            nextButton: false,
                            prevButton: false,
                            spaceBetween: 15
                        }
                    }
                });
            }
        },
        accordion: function () {
            var allPanels = $('.accordion div, .g-accordion .context');
            allPanels.hide();
            $('.accordion h4, .g-accordion .head.parent').click(function () {
                $this = $(this);
                $target = $this.next();
                if ($this.hasClass("ui-state-active")) {
                    allPanels.removeClass('active').slideUp();
                    $target.removeClass('active');
                    $this.removeClass("ui-state-active");
                } else {
                    $(".accordion h4, .g-accordion .head.parent").removeClass("ui-state-active");
                    allPanels.removeClass('active').slideUp();
                    $target.addClass('active').slideDown();
                    $this.addClass("ui-state-active");
                }
                return false;
            });
            //Inner  Accordion
            var contextInner = $('.sub-accordion .context-inner');
            contextInner.hide();
            $('.sub-accordion .inner').click(function () {
                $this = $(this);
                $target = $this.next();
                if ($this.hasClass("ui-state-active")) {
                    contextInner.removeClass('active').slideUp();
                    $target.removeClass('active');
                    $this.removeClass("ui-state-active");
                } else {
                    $(".sub-accordion .inner").removeClass("ui-state-active");
                    contextInner.removeClass('active').slideUp();
                    $target.addClass('active').slideDown();
                    $this.addClass("ui-state-active");
                }
            });
        },
        chat: function () {
            $('input[type="tel"]').on('keypress', function () {
                return event.charCode >= 8 && event.charCode <= 57
            });
            // English Validation
            $("#btnEn").click(function () {
                var name = $('#name').val();
                var email = $('#email').val();
                var number = $('#number').val();
                var subject = $('#subject').val();
                if (name == "") {
                    $('#name').addClass('error-field');
                    $('.online-chat .error').text('Pleae enter name.');
                    return false;
                } else if (!/^[a-z A-Z]*$/g.test(name)) {
                    $('.online-chat .error').text('Pleae enter valid name.');
                    $('#name').addClass('error-field');
                    return false;
                } else if (email == "") {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Please enter you email id.');
                    $('#email').addClass('error-field');
                    return false;
                } else if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
                    $('.online-chat .error').text('Please enter a valid email ID.');
                    $('#email').addClass('error-field');
                    return false;
                } else if (number == "") {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Pleae enter your contact no.');
                    $('#number').addClass('error-field');
                    return false;
                } else if (number.length < 10) {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Number must be 10 digits');
                    $('#number').addClass('error-field');
                    return false;
                } else if (subject == 0) {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Pleae select subject.');
                    $('.custom-select-dropdown').addClass('error-field');
                    return false;
                } else {
                    $(".online-chat").hide();
                    $(".chat-start").fadeIn();
                }
            });
            // ARabic Validation
            $("#btnAr").click(function () {
                var name = $('#nameAr').val();
                var email = $('#emailAr').val();
                var number = $('#numberAr').val();
                var subject = $('#subjectAr').val();
                if (name == "") {
                    $('#nameAr').addClass('error-field');
                    $('.online-chat .error').text('Pleae enter name.');
                    return false;
                } else if (!/^[a-z A-Z]*$/g.test(name)) {
                    $('.online-chat .error').text('Pleae enter valid name.');
                    $('#nameAr').addClass('error-field');
                    return false;
                } else if (email == "") {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Please enter you email id.');
                    $('#emailAr').addClass('error-field');
                    return false;
                } else if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
                    $('.online-chat .error').text('Please enter a valid email ID.');
                    $('#emailAr').addClass('error-field');
                    return false;
                } else if (number == "") {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Pleae enter your contact no.');
                    $('#numberAr').addClass('error-field');
                    return false;
                } else if (number.length < 10) {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Number must be 10 digits');
                    $('#numberAr').addClass('error-field');
                    return false;
                } else if (subject == 0) {
                    $("input").attr('class', '');
                    $('.online-chat .error').text('Pleae select subject.');
                    $('.custom-select-dropdown').addClass('error-field');
                    return false;
                } else {
                    $(".online-chat").hide();
                    $(".chat-start").fadeIn();
                }
            });
            $("#new-discussion").click(function () {
                $(this).addClass('active');
                $("#chat-histor").removeClass('active');
                $("#histor-con").hide();
                $("#discussion-con").show();
            })
            $("#chat-histor").click(function () {
                $(this).addClass('active');
                $("#new-discussion").removeClass('active');
                $("#histor-con").show();
                $("#discussion-con").hide();
            })
            $('#faq-link').click(function () {
                $('.footer-sticky-nav .mask.mclick').show();
                $('#faqs').show();
                $('#online').hide();
            })
            $('#chat-link').click(function () {
                $('.footer-sticky-nav .mask.mclick').show();
                $('#online').show();
                $('#faqs').hide();
            })
            $('.close-sticky, .mask').click(function () {
                $('.footer-sticky-nav .mask.mclick').hide();
                $('#faqs').hide();
                $('#online').hide();
                $('.overlay-questions').hide();
            })
        },
        carSticky: function () {
            function stickyButtonsMobile() {
                var mainContainerTop = $('.car-services').parent(),
                    scrollTop = $(window).scrollTop(),
                    mainContainerHeight = $('.car-services').parent().height();
                if (mainContainerTop.offset().top - 50 < scrollTop) {
                    $('.car-services').addClass('car-sticky');
                    if (mainContainerHeight < scrollTop + -500) {
                        //console.log("Nested True");
                        $('.car-services').removeClass('car-sticky');
                    }
                } else {
                    $('.car-services').removeClass('car-sticky');
                }
            }

            if ($(".sticky-container").length >= 1) {
                stickyButtonsMobile();
                $(window).scroll(function () {
                    //servicesSticky
                    stickyButtonsMobile();
                });
            }
            $(document).on("scroll", onScroll);
            function onScroll(event) {
                var scrollPos = $(document).scrollTop() + 150;
                $('.car-services li a').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if ((refElement.offset().top ) <= scrollPos && (refElement.offset().top) + refElement.outerHeight() > scrollPos) {
                        $('.car-services li a').removeClass("active");
                        currLink.addClass("active");
                    }
                    else {
                        currLink.removeClass("active");
                    }
                });
                //console.log($(".drive-n-car-service").eq(0).offset().top)
                //console.log($(".drive-n-car-service").eq(1).offset().top)
                //console.log($(".drive-n-car-service").eq(2).offset().top)
                //    console.log(scrollPos)
            }
        },
        servicesSticky: function () {
            function stickyButtonsMobile() {
                if ($(".services-detail-head .sticky-detail").length >= 1) {
                    var mainContainerTop = $('.services-detail-head .sticky-detail').parent(),
                        scrollTop = $(window).scrollTop(),
                        mainContainerHeight = $('.services-detail-head .sticky-detail').parent().height();
                    if (mainContainerTop.offset().top - 0 < scrollTop) {
                        $('.services-detail-head .sticky-detail').addClass('car-sticky');
                        if (mainContainerHeight < scrollTop + -4200) {
                            $('.services-detail-head .sticky-detail').removeClass('car-sticky');
                        }
                    } else {
                        $('.services-detail-head .sticky-detail').removeClass('car-sticky');
                    }
                }
            }

            if ($(".sticky-detail").length >= -1) {
                stickyButtonsMobile();
                $(window).scroll(function () {
                    stickyButtonsMobile();
                });
            }
            $(document).on("scroll", onScroll);
            function onScroll(event) {
                var scrollPos = $(document).scrollTop() + 150;
                $('.services-detail-head .sticky-detail li a').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    //if (refElement.offset() != undefined && (currLink.offset().top ) <= scrollPos) {
                    if ((refElement.offset().top ) <= scrollPos && (refElement.offset().top) + refElement.outerHeight() > scrollPos) {
                        // console.log(refElement.offset().top  + " -- " +scrollPos);
                        $('.services-detail-head .sticky-detail li a').removeClass("active");
                        // $('.services-detail-head .sticky-detail li a').parent().removeClass("list-active");
                        currLink.addClass("active");
                        //console.log(currLink.html())
                        //currLink.parent().addClass("list-active");
                        $(".services-detail-head ul li.init a").text(currLink.text())
                    }
                    else {
                        //currLink.removeClass("active");
                    }
                });
            }

            if ($("").length >= 1) {
            }
            //Mobile
            if ($(window).width() <= 767) {
                function stickyButtonsMobile() {
                    var mainContainerTop = $('.services-detail-head .sticky-detail').parent(),
                        scrollTop = $(window).scrollTop(),
                        mainContainerHeight = $('.services-detail-head .sticky-detail').parent().height();
                    if (mainContainerTop.length >= 1) {
                        if (mainContainerTop.offset().top - 5 < scrollTop) {
                            $('.services-detail-head .sticky-detail').addClass('car-sticky');
                            if (mainContainerHeight < scrollTop + -6300) {
                                $('.services-detail-head .sticky-detail').removeClass('car-sticky');
                            }
                        } else {
                            $('.services-detail-head .sticky-detail').removeClass('car-sticky');
                        }
                    }
                }

                $(".services-detail-head ul li:first-child").addClass("init");
                $(".services-detail-head ul").on("click", ".init", function () {
                    $(this).closest(".services-detail-head ul").children('li:not(.init)').toggle();
                });
                var allOptions = $(".services-detail-head ul").children('li:not(.init)');
                $(".services-detail-head ul").on("click", "li:not(.init)", function () {
                    allOptions.removeClass('selected');
                    $(this).addClass('selected');
                    $(".services-detail-head li.list-active").addClass('selected');
                    $(".services-detail-head ul").children('.init').html($(this).html());
                    allOptions.toggle();
                });
                $('.services-detail-head ul li a').click(function () {
                    var top = $('html').find($(this).attr('href')).offset().top;
                    $('html, body').animate({scrollTop: top - 120}, 500);
                })
            }
        },
        navSticky: function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                var logosHeight = $('header .row:first-child').height()
                if (scroll >= logosHeight) {
                    $("header nav").addClass("nav-sticky");
                    $('body').css({'padding-top':'50px'})
                } else {
                    $("header nav").removeClass("nav-sticky");
                    $('body').css({'padding-top':'0'})
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
                // console.log('running here');
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
        faqsPop: function () {
            var allPanels = $('.faqs-search .question-search div');
            allPanels.hide();
            $('.faqs-search .question-search h4').click(function () {
                $this = $(this);
                $target = $this.next();
                if ($this.hasClass("ui-state-active")) {
                    allPanels.removeClass('active').slideUp();
                    $target.removeClass('active');
                    $this.removeClass("ui-state-active");
                } else {
                    $(".faqs-search .question-search h4").removeClass("ui-state-active");
                    allPanels.removeClass('active').slideUp();
                    $target.addClass('active').slideDown();
                    $this.addClass("ui-state-active");
                }
                return false;
            });
        },
        planJourney: function () {
            //Tabs
            $(".plane-your-journey .journey > input").click(function () {
                $(this).next().toggle();
            });
            $(".tab-grid .tabs-box").hide(); // Initially hide all content
            $(".tabs li:first").attr("class", "active"); // Activate first tab
            $(".tab-grid .tabs-box:first").fadeIn(); // Show first tab content
            $('.tabs li a').click(function (e) {
                e.preventDefault();
                if ($(this).attr("class") == "active") { //detection for current tab
                    return
                }
                else {
                    $(".tab-grid .tabs-box").hide(); //Hide all content
                    $(".tabs li").attr("class", ""); //Reset id's
                    $(this).parent().attr("class", "active"); // Activate this
                    $($(this).attr('href')).fadeIn(); // Show content for current tab
                }
            });
            //Calnder
            if($('#datetimepicker12').length){
                $('#datetimepicker12').datetimepicker({
                    inline: true,
                    format: "dddd, MMMM D"
                    //sideBySide: false
                }).on('dp.change', function (date) {
                    //console.log(date);
                    $("#data-value-calender").val($("#datepicker-data").val());
                });
            }

            //Advance options toggle
            $(".plane-your-journey .advance-options .advance-btn").click(function () {
                var $this = $(this);
                $this.toggleClass("active");
                $this.parent().toggleClass("active");
            });
            $(" .journeys .top-buttons .filter-journey").click(function () {
                var $this = $(this);
                $(".plane-your-journey .advance-options .advance-btn").addClass("active");
                $(".plane-your-journey .advance-options .advance-btn").parent().addClass("active");
            });
            //Share toggle
            $(".journeys .top-buttons .share > a").click(function () {
                $(".journeys .top-buttons .share .share-popup").toggle();
            });
            //Plus-btn
            $(".journeys .journeys-grid .your-journey .plus-btn").click(function () {
                $this = $(this);
                if ($this.parent().parent().parent().hasClass("active")) {
                    $this.parent().parent().parent().removeClass("active");
                } else {
                    $(".journeys .journeys-grid").removeClass("active");
                    $this.parent().parent().parent().addClass("active");
                }
            });
            //Share toggle two
            $(".journeys .journeys-grid .your-journey .print-share a.print").click(function () {
                $(this).next().toggleClass("active");
            });
            //Journery Swiper
            var isArabic = $('body').hasClass('lang-ar');
            $('.your-journey-box .swiper-container').each(function (index, element) {
                $(this).parent(".your-journey-box").addClass('s' + index);
                $('.your-journey-box.s' + index + " .swiper-container").swiper({
                        nextButton: '.s' + index + ' .swiper-button-next',
                        prevButton: '.s' + index + ' .swiper-button-prev',
                        slidesPerView: 6.5,
                        spaceBetween: 0,
                        slidesPerGroup: 6,
                        nested: true
                    }
                );
            });
            //Depart & Arrive
            $(".journey-dropdown .single-journey fieldset label").click(function () {
                $(".journey-dropdown .single-journey  fieldset").removeClass("active");
                $(this).parents("fieldset").addClass("active");
            });
        },

        // Start megamenu
        megaMenu: function () {
            //fadeBoday
            $('header nav').hover(
                function () {
                    $(".fade-body").show();
                },
                function () {
                    $(".fade-body").hide();
                }
            );
            $("ul.main_nav_bar li").mouseenter(function () {
                if (screenWidth > 768) {
                    // console.log("mouseenter")
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
            $('.shortMenu a').focus(function(){
                //console.log( $(this).parent());
                $(this).parent().siblings().find('.full-grid').hide();
            });


            $('#resetsetting').click(function() {
                $("body").removeClass("blind-default blind-color blind-green blind-red");
                $("body").removeClass('large');
                $("body").removeClass('small');
                $("body").removeClass('medium');
                $('body').addClass('normal');
                $('.blind').prop('checked', false);
                $('a.reset-font.plus').removeClass('large-font').addClass('medium-font');
                setCookie("blind-mode",  'blind-default', 1);
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

            $('.minus.reset-font').click(function(){
                $('.plus.reset-font').removeClass('medium-font').addClass('normal-font')
            });
            $(".reset-font").click(function () {
                var navHeight = $('nav.container-fluid').height();
                $('.header-right > div').css({'height':navHeight });
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
                        if ((containerWidth ) <= liWidth) {
                            liWidth = $(this).outerWidth();
                            counter += 1;
                        }
                        else {
                        }
                        $(this).addClass("menu-group set-" + counter);
                    });
                    console.log(counter);
                    if (counter === 0) {
                        //$("header nav .secondary-nav span.next,header nav .secondary-nav span.pre").hide();
                        $("header nav .secondary-nav span.next,header nav .secondary-nav span.next").addClass('disabled');
                        $("header nav .secondary-nav span.next,header nav .secondary-nav span.pre").addClass('disabled');
                    } else if (counter === 1){
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
                    $(this).find('span').text(dataText);
                    $(this).find('img').attr('src', 'common/img/latest-img/X.png');
                } else {
                    $(this).find('span').text(textDefault);
                    $(this).find('img').attr('src', 'common/img/latest-img/search-icon-en.png');
                }
            });

            $('.search-action-btn').focusout(function(){
                $(".search").trigger('click');
            })
            $('.shortMenu a').mouseover(function() {
                if($('.search').hasClass('active')){
                    $(".search").trigger('click');
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
                    $('.main_nav_bar').css({'overflow': 'scroll'});
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
            console.log(li.length)
            li.each(function (index) {
                //       console.log(index)
                liWidth += $(this).outerWidth();
                if ((containerWidth ) <= liWidth) {
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
        dskVersion:function(){
            $('#view_dsk').on('click', function() {
                setCookie("desktop-mode", true, 100);
                $('meta[name="viewport"]').prop('content', 'width= 1272, initial-scale = 0');
                $('.menu-btn').removeClass('active');
                $('.main_nav_bar').removeClass('active').hide();
                $('.mobile-accessibility').hide();
                $('.view-mobile').addClass('active');
                    window.location.reload();
                });

            $('.view-mobile').click(function(){
                setCookie("desktop-mode", false, 100);
                $('meta[name="viewport"]').prop('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
                $('.view-mobile').removeClass('active');
                window.location.reload();
            });

            if(getCookie("desktop-mode")=='true'){
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
                $(".login-n-register").toggleClass("active");
                $(".login-n-register .login-dropdown").toggle();
            });
            $('.login-n-register a, .login-n-register .login-dropdown').click(function (e) {
                e.stopPropagation();
            });
            $('.login-n-register .login-dropdown a:last-child').focusout(function(){
                $(".login-dropdown a").trigger('click');
            })

            $('.red-arrow-btn').focusout(function(){
                $('.accessibility > h2').trigger('click');
            })
        },
        skipMenu:function(){


        },
        // End megamenu
        init: function () {
            app.detectDevice();
            app.resizeListener();
            app._windowResize();
            app.initAppScroll();
            app.smoothScroll();
            app.matchHeight();
            app.bxSlider();
            app.accordion();
            app.chat();
            app.carSticky();
            app.servicesSticky();
            app.navSticky();
            app.blindMode();
            app.accessibility();
            app.eyeIcon();
            app.menuAb();
            app.faqsPop();
            app.planJourney();
            app.mobileNav();
            // Start megamenu
            setTimeout(function(){
                app.megaMenuSlider();
            },200);
            app.leftStickey();
            app.search();
            app.megaMenu();
            app.fontSize();
            app.dskVersion();
            app.loginDropdown();
            app.skipMenu();
            // End megamenu


        }
    };
    window.app = app;
})
(window, document, jQuery);
$(function () {
    $(".mobile-app-wrapper > ul > li").click(function () {
        var divToToggle = $($(this).find("a").attr('href'));
        $(".mob-ser-detail:visible").not(divToToggle).slideUp("slow");
        divToToggle.slideToggle("slow");
    });
    $('.mobile-app-wrapper > ul > li').click(function () {
        return false;
    })
});
/*function myMap() {
 var mapCanvas = document.getElementById("map");
 var mapOptions = {
 center: new google.maps.LatLng(51.5, -0.2),
 zoom: 10
 };
 var map = new google.maps.Map(mapCanvas, mapOptions);
 }*/
$(document).scroll(function () {
    var y = $(document).scrollTop(),
        header = $(".second-main-nav");
    if (y >= 250) {
        header.css({position: "fixed", "top": "0", "left": "0"});
    } else {
        header.css("position", "static");
    }
});
var timeOut;
function scrollToTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 10);
    }
    else clearTimeout(timeOut);
}
function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}
$(function () {
    var dd = new DropDown($('#dd'));
    $(document).click(function () {
        // all dropdowns
        $('.wrapper-dropdown-5').removeClass('active');
    });
});
$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
});
$(document).ready(function () {
    $("#siteSearch").click(function (event) {
        var FAQVal = $.trim($("#faqFieldId").val());
        if (FAQVal == '' || FAQVal == "How do I?") {
            alert("Please use questions or keywords to search");
            //event.preventDefault();
            return false;
        } else {
            //alert('not');
            $("#askForm").submit();
        }
    });
    app.init();
    var touch = 'ontouchstart' in document.documentElement
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0);
    $('.mask, .close-question').click(function () {
        $("body").removeClass("chat-print");
    });

});
function printDiv() {
    $(".print-chat-con").text('');
    $(".tabs-chat").clone().appendTo(".print-chat-con");
    $("body").addClass("chat-print");
    window.print();
    //$("body").removeClass("chat-print");
}
function getKeyCode(key) {
    //return the key code
    return (key == null) ? event.keyCode : key.keyCode;
}
var $previousActiveElement = null;
var $lastMenuItem = false;
var focusInMenu = false
$(document).on('keyup', function (eventObj) {
    if (getKeyCode(eventObj) == '9') {
        var trueGridCondtion = $("#main_nav_part ul.main_nav_bar a").hasClass("menu_item_active");
        var fullGrid = $("#main_nav_part ul.main_nav_bar a.menu_item_active").parent(".has_submenu").find(".full-grid");
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


                if(!($("header nav .secondary-nav span.next").hasClass("disabled") || $("header nav .secondary-nav span.next").css("display") ==='none')){
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
        if ($mainMenuLink.hasClass('search')) {
            $('.search').trigger('click');
            $('#searchKW').focus();
        }
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

    } else if (getKeyCode(eventObj) == '13') {
        var $activeLink = $(document.activeElement);
        $activeLink.trigger('click');
    } else if (getKeyCode(eventObj) == '16') {
        if (!trueGridCondtion) {
            fullGrid.removeClass("active-fast");
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


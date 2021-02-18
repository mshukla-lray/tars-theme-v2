function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


$(function () {
  var AccessibilityWidget =
    /*#__PURE__*/
    function () {
      function AccessibilityWidget() {
        _classCallCheck(this, AccessibilityWidget);

        //setting up variables 
        this.rangeInput = $('.text-size__range');
        this.textInput = $('.accessibility__dropdown--radio.text-size input[name="text-size"]');
        this.audioInput = $('.accessibility__dropdown--radio input[name="audio"]');
        this.signInput = $('.accessibility__dropdown--radio input[name="sign"]');
        this.colorChange = $('.accessibility__dropdown--color-input input[name="blind2"]');
        this.accMob = $('.m-acc.md-trigger');
        this.dropdown = $('header .accessibility .header-dropdown'); //intializing functions

        this.rangeInput.on('input', 'input', function () {
          accWidget.onRangeInput(this);
        });
        this.audioInput.on('change', function () {
          accWidget.onAudioInput(this);
        });
        this.textInput.on('change', function () {
          accWidget.onTextSize();
        });
        this.signInput.on('change', function () {
          accWidget.onSignInput(this);
        });
        this.colorChange.on('click', function () {
          accWidget.onColorChange(this);
        });
        this.init();
      }

      _createClass(AccessibilityWidget, [{
        key: "init",
        value: function init() {
          //initializing the style sheet to be used by the range slider
          var sheet = document.createElement('style');
          sheet.id = "styleRange";
          this.rangeInput.append(sheet);
          this.sheet = document.getElementById('styleRange');
          this.sheet.textContent = this.setStyle(2);
          var cookie = getCookie("blind-mode"); //overwritting default state making sure the default is checked

          if (cookie == null || _typeof(cookie) == undefined || cookie == '') {
            $('.accessibility .blind.blind-default').prop('checked', true);
          } else {
            $('.accessibility .blind.' + cookie).prop('checked', true);
          }
        } //input change for audio

      }, {
        key: "onAudioInput",
        value: function onAudioInput(e) {
          $('#audioResult').html(e.value);
        } //input change for sign

      }, {
        key: "onSignInput",
        value: function onSignInput(e) {
          $('#signResult').html(e.value);
        } //On the change of the color 

      }, {
        key: "onColorChange",
        value: function onColorChange(e) {
          var val = parseInt(this.rangeInput.children('input').val()),
            color = e.getAttribute('data-body-class');
          this.sheet.textContent = this.setStyle(val, color);
        } //text size slider js

      }, {
        key: "onTextSize",
        value: function onTextSize() {
          var _this = this;

          // reinit reInitAccordion
          this.reInitAccordion();
          setTimeout(function () {
            _this.reInitAccordion();
          }, 1000);
        }
      }, {
        key: "onRangeInput",
        value: function onRangeInput(el) {
          var _this2 = this;

          var label = $('.text-size__range-result');
          var input = $('.text-size__range input');
          var curVal = parseInt(el.value);

          switch (curVal) {
            case 1:
              label.html(input.attr('data-small')); //changing label

              input.attr('data-font', 'small'); // changing font size

              break;

            case 2:
              label.html(input.attr('data-medium')); //changing label

              input.attr('data-font', 'normal'); // changing font size

              break;

            case 3:
              label.html(input.attr('data-large')); //changing label

              input.attr('data-font', 'large'); // changing font size

              break;
            //default state

            default:
              label.html(input.attr('data-medium'));
              input.attr('data-font', 'normal');
              break;
          } //apply style to the selected range


          this.sheet.textContent = accWidget.setStyle(curVal); // reinit reInitAccordion

          this.reInitAccordion();
          setTimeout(function () {
            _this2.reInitAccordion();
          }, 1000);
        }
      }, {
        key: "setStyle",
        value: function setStyle(val, blindMode) {
          blindMode = blindMode || getCookie("blind-mode");
          var prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
          var value = (val - 1) * 50,
            style = '';
          var body = $('body');
          var color = '#171c8f'; // special statements for accessibility

          switch (blindMode) {
            case 'blind-color':
            case 'blind-green':
              color = '#fff';
              break;

            case 'blind-red':
              color = '#ffff00';
              break;

            default:
              color = '#171c8f';
          }

          var trackColor = blindMode != null && blindMode != 'blind-default' ? '#8F8F8F' : '#edeeef';
          var isArabic = $('html').attr('lang') == 'ar';
          var gradientDirection = isArabic ? 'to left' : 'to right';
          style += this.rangeInput.selector + ' {background: linear-gradient(' + gradientDirection + ', ' + color + ' 0%, ' + color + ' ' + value + '%, #fff ' + value + '%, #fff 100%)}'; // Change background gradient

          for (var i = 0; i < prefs.length; i++) {
            style += this.rangeInput.selector + ' input::-' + prefs[i] + '{background: linear-gradient(' + gradientDirection + ', ' + color + ' 0%, ' + color + ' ' + value + '%, ' + trackColor + ' ' + value + '%, ' + trackColor + ' 100%)}';
          }

          return style;
        }
      }, {
        key: "reInitAccordion",
        value: function reInitAccordion() {
          var acc = document.getElementsByClassName("accTitle");
          $.each(acc, function (i, l) {
            // calculates on accessibility option changes
            if ($(this).hasClass("active")) {
              var panel = acc[i].nextElementSibling;
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
      }]);

      return AccessibilityWidget;
    }();

  var accWidget = new AccessibilityWidget();
});

$(function () {
  var Accordion =
    /*#__PURE__*/
    function () {
      function Accordion() {
        _classCallCheck(this, Accordion);

        this.accordion();
        $(document).on('click', '.accTitle', this.jqAccordion);
        $(document).on('click', '.accTarget', this.jqAccordionTarget);
      }

      _createClass(Accordion, [{
        key: "accordion",
        value: function accordion() {
          var acc = document.getElementsByClassName("accTitle");
          $.each(acc, function (i, l) {
            // calculates on page load 
            if ($(this).hasClass("active")) {
              var panel = acc[i].nextElementSibling;

              if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
              }
            }
          });
        }
      }, {
        key: "jqAccordion",
        value: function jqAccordion() {
          var $this = $(this);
          $this.toggleClass('active');
          var content = $this.next();
          var scrollHeight = content.prop('scrollHeight');

          if (content.css('maxHeight') !== '0px') {
            content.css('maxHeight', '0px');
          } else {
            content.css('maxHeight', "".concat(scrollHeight, "px"));
          }
        }
      }, {
        key: "jqAccordionTarget",
        value: function jqAccordionTarget() {
          var $this = $(this);
          $this.toggleClass('active');
          var id = $this.attr('data-target');
          var scrollHeight = $("#".concat(id)).prop('scrollHeight');

          if ($("#".concat(id)).css('maxHeight') !== '0px') {
            $("#".concat(id)).css('maxHeight', '0px');
          } else {
            $("#".concat(id)).css('maxHeight', "".concat(scrollHeight, "px"));
          }
        }
      }]);

      return Accordion;
    }();

  new Accordion();
});

$(function () {
  var CommonNavWidget =
    /*#__PURE__*/
    function () {
      function CommonNavWidget() {
        _classCallCheck(this, CommonNavWidget);

        this.dropdown = $('header .header-dropdown');
        this.navTriggers = $('.m-acc.md-trigger, .m-lang.md-trigger');
        this.dropdown.on('click', '.md-close', function () {
          commonNav.mobileAccessClose();
        });
        this.navTriggers.on('click', function (e) {
          commonNav.openNavDropdown(e);
        });
        this.dropdown.on('click', '.container-md', function (e) {
          e.stopPropagation();
        });
        $(document).on('click', '.menu-btn', this.hideFadeOverlay);
        this.init();
      }

      _createClass(CommonNavWidget, [{
        key: "init",
        value: function init() {
          $('body').click(function () {
            //mobile removing active styling
            $("header .accessibility").removeClass("active");
            if (this.dropdown) this.dropdown.hide();
          });
        }
      }, {
        key: "openNavDropdown",
        value: function openNavDropdown(e) {
          e.stopPropagation();
          var element = $('.md-modal#' + e.target.getAttribute('data-modal'));
          element.removeAttr('style');
        }
      }, {
        key: "mobileAccessClose",
        value: function mobileAccessClose() {
          $('.m-acc.md-trigger').removeClass('active');
        }
      }, {
        key: "hideFadeOverlay",
        value: function hideFadeOverlay() {
          if (!$('.menu-btn').hasClass('active')) {
            $('.fade-body').fadeOut();
          }
        }
      }]);

      return CommonNavWidget;
    }();

  var commonNav = new CommonNavWidget();
});

$(function () {
  var LanguageWidget =
    /*#__PURE__*/
    function () {
      function LanguageWidget() {
        _classCallCheck(this, LanguageWidget);

        // this.trigger = $('.language-switch.nav-trigger');
        this.langRadio = $('.language-switch #languages input[type="lang"]');
        $(document).on('click', '.language-switch.nav-trigger', this.openLanguageDropdown);
        this.langRadio.on('change', function () {
          langWidget.switchLanguage(this);
        });
        $(document).on('mouseup', this.removeLangClass);
        $(document).on('mouseup', '.language-switch.nav-trigger, .langSwitchContainer', function () {
          return false;
        }); // hide login dropdown on mouseup of accessibility trigger

        $(document).on('mouseup', '.accessibility.nav-trigger', this.hideLoginDropdown); // hide accessibility dropdown on mouseup 

        $(document).on('mouseup', '.login-n-register', this.hideAccessibilityDropdown);
      }

      _createClass(LanguageWidget, [{
        key: "openLanguageDropdown",
        value: function openLanguageDropdown() {
          $('.language-switch.nav-trigger, .langSwitchContainer').toggleClass('active');
          langWidget.hideLoginDropdown();
        }
      }, {
        key: "removeLangClass",
        value: function removeLangClass() {
          $('.language-switch.nav-trigger, .langSwitchContainer').removeClass('active');
        }
      }, {
        key: "switchLanguage",
        value: function switchLanguage(el) {
          window.location.assign(el.value);
        }
      }, {
        key: "hideLoginDropdown",
        value: function hideLoginDropdown() {
          // hide login dropdown 
          $('.login-dropdown').hide();
          $('.login-n-register').removeClass('active');
        }
      }, {
        key: "hideAccessibilityDropdown",
        value: function hideAccessibilityDropdown() {
          $('.accessibility.nav-trigger, .accessibility').removeClass('active');
        }
      }]);

      return LanguageWidget;
    }();

  var langWidget = new LanguageWidget();
});

$(function () {
  var MobileModal =
    /*#__PURE__*/
    function () {
      function MobileModal() {
        _classCallCheck(this, MobileModal);

        this.MobileModalTrigger();
      }

      _createClass(MobileModal, [{
        key: "MobileModalTrigger",
        value: function MobileModalTrigger() {
          var trigger = document.querySelectorAll('.md-trigger');
          var mdclose = document.querySelectorAll('.md-close'); // open

          if (trigger) {
            for (var i = 0; i < trigger.length; i++) {
              trigger[i].addEventListener('click', function () {
                var modalId = $(this).attr('data-modal');
                $(".md-modal#".concat(modalId)).addClass('md-show');
                $('body').addClass('noscroll');
              });
            }
          } // close


          if (mdclose) {
            for (var _i = 0; _i < mdclose.length; _i++) {
              mdclose[_i].addEventListener('click', function () {
                $('.md-modal').removeClass('md-show');
                $('body').removeClass('noscroll');
              });
            }
          }
        }
      }]);

      return MobileModal;
    }();

  new MobileModal();
});

$(function () {
  var QuickWidget =
    /*#__PURE__*/
    function () {
      function QuickWidget() {
        _classCallCheck(this, QuickWidget);

        $('.toggleQwidget').on('click', this.toggleWidget);
        $(document).on('click', '.triggerSpinner', this.triggerSpinner);
        $(document).on('keyup', '.makeUppercase', this.inputUppercase);
        $(document).on('click', '.closeHwidget, .toggleQwidget', this.resetWidget);
      }

      _createClass(QuickWidget, [{
        key: "toggleWidget",
        value: function toggleWidget() {
          var $this = $(this);
          var widgetItem = '.qwidget__item'; // close widget results section incase if its open

          var resultsId = 'qwidget__results';
          var formId = 'qwidget__form';
          setTimeout(function () {
            // remove 'hide class for form 
            $("#".concat(formId, ", .").concat(formId)).removeClass('hide'); // add 'hide' class from results 

            $("#".concat(resultsId, ", .").concat(resultsId)).addClass('hide');
          }, 1000); // end

          if (!$this.parents(widgetItem).hasClass('is-open')) {
            $(widgetItem).removeClass('is-open');
            $(widgetItem).addClass('is-collapse');
            $this.parents(widgetItem).removeClass('is-collapse').addClass('is-open');
          } else {
            $this.parents(widgetItem).removeClass('is-open');
            $(widgetItem).removeClass('is-collapse');
          }
        } // trigger spinner

      }, {
        key: "triggerSpinner",
        value: function triggerSpinner() {
          var $this = $(this);
          var spinnerId = $this.attr('data-spinner');
          var resultsId = $this.attr('data-results');
          var formId = $this.attr('data-form');
          $("#".concat(spinnerId, ", .").concat(spinnerId)).removeClass('hide');
          setTimeout(function () {
            $("#".concat(spinnerId, ", .").concat(spinnerId)).addClass('hide'); // add 'hide class for form 

            $("#".concat(formId, ", .").concat(formId)).addClass('hide'); // remove 'hide' class from results 

            $("#".concat(resultsId, ", .").concat(resultsId)).removeClass('hide');
          }, 2000);
        } // Reset widget view 

      }, {
        key: "resetWidget",
        value: function resetWidget() {
          var $this = $(this);
          var resultsId = $this.attr('data-results');
          var formId = $this.attr('data-form');
          setTimeout(function () {
            // remove 'hide class for form 
            $("#".concat(formId, ", .").concat(formId)).removeClass('hide'); // add 'hide' class from results 

            $("#".concat(resultsId, ", .").concat(resultsId)).addClass('hide');
          }, 1000);
        } // Make input character uppercase

      }, {
        key: "inputUppercase",
        value: function inputUppercase() {
          $(this).val($(this).val().toUpperCase());
        }
      }]);

      return QuickWidget;
    }();

  new QuickWidget();
});

$(function () {
  $(".search").click(function () {
    if ($(this).hasClass('active')) {
      $(this).find('span').text('');
      $(this).find('img').attr('src', '/rta-assets/img/sprite.svg#close');
    } else {
      $(this).find('span').text('');
      $(this).find('img').attr('src', '/rta-assets/common/img/latest-img/search-icon-en.png');
    }
  });
});

$(function () {
  var Slider =
    /*#__PURE__*/
    function () {
      function Slider() {
        _classCallCheck(this, Slider);

        this.initRCarousel();
        this.homePressReleaseCarousel();
        $(document).on('click', '.hsocial-tabs li', this.homePressReleaseCarousel);
      }

      _createClass(Slider, [{
        key: "initRCarousel",
        value: function initRCarousel() {
          new Swiper('#rSlider', {
            slidesPerView: 3,
            spaceBetween: 24,
            draggable: true,
            pagination: '#rSlider .swiper-pagination',
            paginationType: 'fraction',
            nextButton: '#rSlider .swiper-button-next',
            prevButton: '#rSlider .swiper-button-prev',
            breakpoints: {
              // when window width is <= 960px
              960: {
                slidesPerView: 2.5,
                spaceBetween: 20
              },
              // when window width is <= 640px
              640: {
                slidesPerView: 1.2,
                spaceBetween: 15
              }
            }
          });
        }
      }, {
        key: "homePressReleaseCarousel",
        value: function homePressReleaseCarousel() {
          new Swiper('#pressReleaseCarousel', {
            slidesPerView: 1,
            draggable: true,
            pagination: '#pressReleaseCarousel .swiper-pagination',
            paginationType: 'fraction',
            nextButton: '#pressReleaseCarousel .swiper-button-next',
            prevButton: '#pressReleaseCarousel .swiper-button-prev',
            breakpoints: {
              // when window width is <= 640px
              640: {
                slidesPerView: 1.1,
                spaceBetween: 15
              }
            }
          });
        }
      }]);

      return Slider;
    }();

  new Slider();
});

$(function () {
  var SupportMenu =
    /*#__PURE__*/
    function () {
      function SupportMenu() {
        var _this = this;

        _classCallCheck(this, SupportMenu);

        $('.supportMenuBtn').on('click', this.menuAddClass);
        $('.supportMenuClose, .md-overlay').on('click', this.menuRemoveClass);
        $(document).on('keyup', function (e) {
          return e.keyCode === 27 ? _this.menuRemoveClass() : null;
        });
      }

      _createClass(SupportMenu, [{
        key: "menuAddClass",
        value: function menuAddClass() {
          $('.supportMenu, .md-overlay').addClass('is-active');
          $('.footer-sticky').addClass('is-support-menu-open');
        }
      }, {
        key: "menuRemoveClass",
        value: function menuRemoveClass() {
          $('.supportMenu, .md-overlay').removeClass('is-active');
          $('.footer-sticky').removeClass('is-support-menu-open');
        }
      }]);

      return SupportMenu;
    }();

  new SupportMenu();
});

$(function () {
  var a = {
    accordionOn: ["xs"]
  };

  $.fn.responsiveTabs = function (e) {
    var t = $.extend({}, a, e),
      s = "";
    return $.each(t.accordionOn, function (a, e) {
      s += " accordion-" + e;
    }), this.each(function () {
      var a = $(this),
        e = a.find("> li > a"),
        t = $(e.first().attr("href")).parent(".tab-content"),
        i = t.children(".tab-pane");
      a.add(t).wrapAll('<div class="responsive-tabs-container" />');
      var n = a.parent(".responsive-tabs-container");
      n.addClass(s), e.each(function (a) {
        var t = $(this),
          s = t.attr("href");
        var i = "",
          n = "",
          r = "";
        t.parent("li").hasClass("active") && (i = ""), 0 === a && (n = " first"), a === e.length - 1 && (r = " last"), t.clone(!1).addClass("accordion-link" + i + n + r).insertBefore(s);
      });
      var r = t.children(".accordion-link");
      var f = $('.tab-pane.active'),
        h = f[0].scrollHeight; // f.css('max-height', h);

      e.on("click", function (a) {
        a.preventDefault();
        var e = $(this),
          s = e.parent("li"),
          n = s.siblings("li"),
          c = e.attr("href"),
          l = t.children('a[href="' + c + '"]');
        s.hasClass("active") || (s.addClass("active"), n.removeClass("active"), i.removeClass("active"), $(c).addClass("active"), r.removeClass("active"), l.addClass("active"));
      }), r.on("click", function (t) {
        t.preventDefault();
        var s = $(this),
          n = s.attr("href"),
          c = a.find('li > a[href="' + n + '"]').parent("li"); // s.hasClass("active-tab") || (r.removeClass('active-tab'), r.next().removeAttr('style'), s.next().css('max-height', s.next()[0].scrollHeight))
        // s.hasClass("active") || (r.removeClass("active"), s.addClass("active"), s.addClass("active-tab"), i.removeClass("active"), $(n).addClass("active"), e.parent("li").removeClass("active"), c.addClass("active"))

        if (s.hasClass('active-tab')) {
          s.removeClass('active-tab');
          $(n).removeAttr('style');
          $(n).removeClass('active');
          return;
        } else {
          // r.removeClass('active-tab')
          s.addClass('active-tab');
          $(n).css('max-height', $(n)[0].scrollHeight);
          $(n).addClass('active'); 
        } 

      });
    });
  };

  $('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm']
  });
});

$(function(){
  placeholderObj.init();
});

var onLoadCaptcha = function() {
	console.log("hidden captcha onload........");
	$(".widget-submit-btn").each(function() {			
		var btnObject = $(this);
		//alert("onLoadCaptcha > " + btnObject.attr("id"));
		var widgetId = grecaptcha.render(btnObject.attr("id"), {
			"sitekey" : "6LdRWZ8UAAAAAAL4nCmUd3z_ZetmLzwuVqeL32HB",
			"size" : "invisible",
			"callback" : function(){
				if( btnObject.attr("id") == 'subscriptionFormBtn'){
					validateSubscForm();
				}else{
					submitWidget(btnObject);
				}					
			}
		});
		btnObject.attr('data-widget-id', widgetId);
	});
}; 


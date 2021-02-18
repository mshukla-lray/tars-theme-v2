/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 23-11-2015
 */!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(iemobile)[\/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(windows phone)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.iemobile){var f="msie";e.browser=f,d[f]=!0}if(d.edge){delete d.edge;var g="msedge";e.browser=g,d[g]=!0}if(d.safari&&d.blackberry){var h="blackberry";e.browser=h,d[h]=!0}if(d.safari&&d.playbook){var i="playbook";e.browser=i,d[i]=!0}if(d.bb){var j="blackberry";e.browser=j,d[j]=!0}if(d.opr){var k="opera";e.browser=k,d[k]=!0}if(d.safari&&d.android){var l="android";e.browser=l,d[l]=!0}if(d.safari&&d.kindle){var m="kindle";e.browser=m,d[m]=!0}if(d.safari&&d.silk){var n="silk";e.browser=n,d[n]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});

var animateDur = 300,
    resizeTimeout,
    relatedList = ['next-step', 'additional', 'cancel'];

function commaSeparatedTotalBalance(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

function ssChartClass() {

  this.blackpoints = 0;
  this.dataSource = {};

  this.setBlackPoints = function(n) {
    this.blackpoints = n;
    return this;
  };

  this.calcObjFines = function(obj, selector) {
    var keys = Object.keys(obj);
    var self = this;

    this.dataSource.totalBalance += keys.map(function(key, i) { return parseFloat(obj[key].amount) }).reduce(function(a, b) { return a + b });

    keys.forEach(function(key, i) {
      self.dataSource.counters[i] += parseFloat(obj[key].count);

      var $item = $(selector).find('.ss-chart__item_' + (i + 1));
      $item.find('.ss-chart__source-title').text(obj[key].title);
      $item.find('.ss-chart__source-value').text(self.dataSource.counters[i]);
    });

    self.dataSource.counterTotal = self.dataSource.counters.reduce(function(a, b) {
      return a + b;
    });

    $(selector).find('#finesTotal').html(commaSeparatedTotalBalance(this.dataSource.totalBalance));

    $(selector).find('#finesBlackPoints').text(this.blackpoints);
  };

  this.setFines = function(arr, id, selector) {

    this.dataSource = {
      totalBalance: 0,
      counters: [0, 0, 0, 0],
      counterTotal: 0
    };

    var self = this;
    var fines;

    if (typeof id == 'undefined') {
      arr.forEach(function(item) {
        fines = item.fines[0];
        self.calcObjFines(fines, selector);
      });
    } else {
      fines = arr[id].fines[0];
      self.calcObjFines(fines, selector);
    }

  };

  this.drawChart = function(selector) {

    var self = this;

    var arr = this.dataSource.counters.map(function(n) {
      return n * 100 / self.dataSource.counterTotal;
    });

    var dataset = [
      {
        class: 'payable',
        value: arr[0],
        color: '#dc3912' //payable
      }, {
        class: 'nonpayable',
        value:  arr[1],
        color: '#ffc100' //nonpayable
      }, {
        class: 'blackpoints',
        value:  arr[2],
        color: '#1b0e92' //blackpoints
      }, {
        class: 'license',
        value:  arr[3],
        color: '#00bb61' //license
      }
    ];

    var maxValue = 25;
    var container = $(selector).find('.ss-chart');
    container.html(''); //remove all

    var addSector = function (data, startAngle, collapse) {
      var sectorDeg = 3.6 * data.value;
      var skewDeg = 90 + sectorDeg;
      var rotateDeg = startAngle;
      if (collapse) {
        skewDeg++;
      }

      var sector = $('<div>', {
        'class': 'ss-chart__sector ss-chart__sector_' + data.class
      }).css({
        'background': data.color,
        'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
      }).attr('data-type', data.class);
      container.append(sector);

      return startAngle + sectorDeg;
    };

    dataset.reduce(function (prev, curr) {
      return (function addPart(data, angle) {
        if (data.value <= maxValue) {
          return addSector(data, angle, false);
        }

        return addPart({
          value: data.value - maxValue,
          color: data.color,
          class: data.class
        }, addSector({
          value: maxValue,
          color: data.color,
          class: data.class
        }, angle, true));
      })(curr, prev);
    }, 0);

  };

}


var serviceApp = function () {
  return {
    /***
     * @function _jsSubtract(arr, item, intersection)
     * @returns Object
     * @short Subtracts `item` from the array and returns the result as a new array.
     *
     * @example
     *
     *   _jsSubtract([1,3,5], [5,7,9])           -> [1,3]
*                                                -> [5]
     *
     * @param {Array} arr
     * @param {Array} item
     *
     ***/
    _jsSubtract: function(arr, item) {
      var resultArr1 = [], // intersection Array
          resultArr2 = []; // subtract Array
      arr.map(function(elem){
        if( item.indexOf( elem ) >= 0 ){
          resultArr1.push( elem );
        } else
          resultArr2.push(elem);
      });

      return {
                intersection : resultArr1, //show
                subtract : resultArr2 // hide
              }
    },
    chart: function (selector) {

      var $selector = $(selector),
          $chart = $selector.find('.ss-chart');

      if ($chart.length) {
        var chartDataUrl = $chart.data('url');
        $.getJSON(chartDataUrl, function( fines ) {

          //First init Chart
          var Chart = new ssChartClass();
          Chart.setBlackPoints(20);
          Chart.setFines(fines, undefined, selector);
          Chart.drawChart(selector);

          $selector.on('mouseenter', '.ss-chart__sector', function () {
            var $this = $(this),
              type = $this.data('type');

            $this.addClass('ss-chart__sector_hover').siblings('.ss-chart__sector_' + type).addClass('ss-chart__sector_hover');
            $selector.find('.ss-chart__item').filter('[data-type=' + type + ']').siblings().addClass('ss-chart__item_inactive');
          }).on('mouseleave', '.ss-chart__sector', function () {
            $(this).parent().find('.ss-chart__sector_hover').removeClass('ss-chart__sector_hover');
            $selector.find('.ss-chart__item').removeClass('ss-chart__item_inactive');
          });

        });
      }

      // Select Vehicles
      /*function getHtmlVehicles(list) {
        if(list.length === 1)
          return '<div class="select-box"><div class="select-value">' + list[0].letter + '<img src="rta-assets/img/new-structure/pic-select.gif" alt="">' + list[0].number +  '</div></div>';
        var innerTpl = '<li data-id="all">All Vehicles</li>';
        $.each(list, function(i) {
          innerTpl += '<li data-id="' + i + '">' + this.letter + '<img src="rta-assets/img/new-structure/pic-select.gif" alt="">' + this.number + '</li>'
        });
        return '<div class="select-box"><div class="select-value">All Vehicles</div><ul class="select-menu">' + innerTpl + '</ul></div>';

      }

      //$('#selectVehicles').html(getHtmlVehicles(fines));

      // Select Box
       var selectValue = $('.select-value');
       var selectMenu = $('.select-menu');
       $(selectValue).on('click', function() {
       $(this).next(selectMenu).slideToggle(200);
       });
       $(selectMenu).on('mouseleave', function() {
       $(this).slideUp(200);
       });

       $('.select-menu li').on('click', function() {
       var $this = $(this),
       selectCurrent = $this.html(),
       id = $this.data('id');
       $this.closest(selectMenu).prev(selectValue).html(selectCurrent);

       var newChartData = getData(id,fines);
       drawChart(newChartData);
       setChartValues(newChartData);
       selectMenu.slideUp(200);
       });*/

    },
    loading: function (status, type) {
      var $wrap = $('#stepLoading');
      if (type && type=='done') {
        $wrap = $('#redirectLoading');
      }

      if (status) {
        $wrap.fadeIn(animateDur);
      } else {
        $wrap.fadeOut(animateDur);
      }
    },
    loadContent: function () {
      var _app = this;
          //$wrap = $('.smart-step__wrap');

      // Load Content
      $('body').on('click', '.smart-content-load:not(.active)', function (e) {

        var $this = $(this),
          $step = $this.closest('.smart-step'),
          contentUrl = $this.data('url'),
          loadType = $this.data('type'),
          target = $this.data('target'),
          group = $this.data('group'),
          $listGroup = $step.find('[data-group='+ group + ']').not(this),
          $target = $(target),
          animation =  $this.data('animation'),
          selectedText = $this.data('selected'),
          nonSelectedText = $this.data('nonselected');

        if (contentUrl != "empty") {
          // Show loading box
          _app.loading(true);

          if (loadType && loadType == 'more') {
            $.get(contentUrl, function (data) {

              $target.append(data).find('.ss-load-more__content').slideDown((animation || animation == 0 ? animation : animateDur), function () {
                //init some modules for new content
                _app.update(target + '.ss-load-more__content');

                $(this).children(':first').unwrap();
              });

              // Hide loading box
              _app.loading(false);
            });
          } else if (loadType && loadType == 'reset') {
              $target.html('')
              _app.loading(false);
          } else {
            $target.slideUp((animation || animation == 0 ? animation : animateDur), function () {

              // Remove active class from other btn from group
              $listGroup.removeClass('active');

              $.get(contentUrl, function (data) {

                $target.html(data).slideDown(animateDur, function () {
                  //init some modules for new content
                  _app.update(target);
                });

                // Add active class for btn
                if (group)
                  $this.addClass('active');

                // Change text btn
                if (selectedText && nonSelectedText) {
                  $this.html(selectedText);

                  $listGroup.each(function () {
                    var $this = $(this),
                      itemNonSelectedText = $this.data('nonselected');

                    if (itemNonSelectedText)
                      $this.html(itemNonSelectedText);
                  });
                }

                var $grecap = $target.find('#gReCaptcha');
                if ($grecap.length) {
                  widgetId1 = grecaptcha.render('gReCaptcha', {
                    'sitekey' : '6LegPagUAAAAAHOK7WQnB2mwDXnl48KMfvki4oaB'
                  });
                }
                //scroll to open content
                //_app.scrollToOpenStep($target);

                // Hide loading box
                _app.loading(false);
              });

            });

          }

        } else {
          // Remove active class from other btn from group
          $listGroup.removeClass('active');

          // if url empty
          $target.slideUp(animateDur, function () {

            // Add active class for btn
            if (group)
              $this.addClass('active');

            $target.html('');
          });

        }

        // Change radio/checkbox
        if ($this.is('.type-renewal__item')) {
          var $input = $this.find('input');

          if ($input.prop('type') == 'radio' || $input.prop('type') == 'checkbox') {
            $input.prop('checked', true).trigger('change');
          }

          e.preventDefault();
        }

        //e.preventDefault();
      });

    },
    loadStep: function () {
      var _app = this,
        $stepsWrap = $('.smart-step__wrap');

      // Load Steps
      $stepsWrap.on('click', '.smart-step-load', function () {
        var $this = $(this),
            stepUrl = $this.data('url'),
            target = $this.data('target'),
            $target = $(target),
            $targetContent = $target.find('.smart-step__content'),
            $current = $this.closest('.smart-step'),
            type = $this.data('type'),
            modal =  $this.data('modal'),
            $recaptcha = $current.find('.ss-recaptcha'),
            recaptchaValid = true;


        function loaded(type){
          //init some modules for new content
          _app.update(target);

          //scroll to open step
          _app.scrollToOpenStep($target);

          // Hide loading box
          _app.loading(false, type);
        }

        if ($recaptcha.length) {
          if ($current.find('#gReCaptcha').length)
            recaptchaValid = grecaptcha.getResponse(widgetId1).length ? true : false;
          else
            recaptchaValid = grecaptcha.getResponse().length ? true : false;

          $recaptcha[recaptchaValid ? 'removeClass' : 'addClass']('has-error');
        }

        if (($current.find('form').length && $current.find('form').valid() && recaptchaValid) || !$current.find('form').length && recaptchaValid){

          // Show loading box
          _app.loading(true, type);

          $.get(stepUrl, function (data) {
            $current.addClass('smart-step_ready').removeClass('smart-step_open');

            $targetContent.html(data);

            if (type=='done') {

              setTimeout(function(){
                $this.closest('.smart-step__allwrap').hide();
                $targetContent.show();
                if(modal)
                  $('#modalPrompt').modal('show');
                loaded(type);
              },5000);

            } else {
              $target.addClass('smart-step_open smart-step_loaded');
              loaded(type);
            }

          });
        }

        return false;
      });

      //Step shows
      $stepsWrap.on('click', '.smart-step_ready:not(.smart-step_open)', function () {
        // Show loading box
        _app.loading(true);

        var $currentStep = $(this),
            $openSteps = $currentStep.siblings('.smart-step_open');

        //_app._toggleRelatedClasses($openSteps, []);

        $openSteps.removeClass('smart-step_open');
        $currentStep.addClass('smart-step_open').nextAll().removeClass('smart-step_ready');

        //scroll to open step
        _app.scrollToOpenStep($currentStep);

        // Hide loading box
        _app.loading(false);

        return false;
      });
    },

    scrollToOpenStep: function ($current) {
      var fixedHeaderHeight = $('.main_nav_part_bg').height();
      $('html, body').animate({scrollTop: $current.offset().top - fixedHeaderHeight}, animateDur);
    },

    // added by Umair
    fixButtonOnScroll: function () {
      $(document).scroll(function (){
        var menuheight= $('header').height() + 50;
        var y = $(this).scrollTop(); 
        if (y > (menuheight)) 
          $('.page-header_btn').addClass("fixed");
        else 
          $('.page-header_btn').removeClass("fixed");
      });
    },
    updateDigits: function () {
      $("#formPlateNumberDigits").on('change',function (){
        $(".row-digits .form-control").addClass("hide");
        var val = $(this).val();
        var width = 100/val;
        console.log(width);
        for(i = 1; i <= val; i++) {
          $(".row-digits").find("input[id*='"+i+"']").each(function(){
            $(this).parent().css("width", width+"%");
            $(this).removeClass("hide");
          });
        }
      });
    },

    toggleDropdown: function () {
      $('.dropdown-btn').on('click', function (event) {
        $(this).parent().toggleClass('open');
      });
      $('body').on('click', function (e) {
        if (!$('.dropdown').is(e.target)
            && $('.dropdown').has(e.target).length === 0
            && $('.open').has(e.target).length === 0
        ) {
            $('.dropdown').removeClass('open');
        }
      });
    },
    toggleCartDescription: function(){
      if ($(".ss-minicart__cart li").size() < 1){
        $(".msg-for-empty-select").show()
        $(".msg-for-selected").hide()
      }
      else{
        $(".msg-for-empty-select").hide()
        $(".msg-for-selected").show()
      }
      if ($(".ss-minicart__cart_request li").size() < 1){
        $(".msg-for-empty-request").show()
        $(".msg-for-requested").hide()
      }
      else{
        $(".msg-for-empty-request").hide()
        $(".msg-for-requested").show()
      }
    },
    updateCart: function () {
      // update basket quantity 
      var counter = $('.ss-minicart__list li').size();
      var counter = $('.ss-minicart__list li').size();
      $('.ss-minicart__items').text(counter);
      // sum up the basket total
      var sum = 0;
      $('.ss-minicart__cart li .ss-minicart__cost').each(function() {
        sum += +$(this).text()||0;
      });
      $(".ss-minicart__total-value").text(sum);
      
      if(counter > 0)
        $(".ss-minicart__actions").show();
      else
        $(".ss-minicart__actions").hide();
    },
    removePlate: function () {
      var _app = this;
      $(".ss-minicart__link-remove").unbind().click(function(event) {
        $(this).closest('.ss-minicart__item').remove();
        _app.updateCart();
        console.log(this);
        _app.toggleCartDescription();
        event.preventDefault();
        event.stopPropagation();
      });
    },
    addPlate: function () {
      var _app = this;
      $(".ss-filter__add-to-cart").unbind().click(function(event) {
        $.get('services/bp/ajax/bp-search__add-cart__en.html', function (data) {
          $('.ss-minicart__cart').append(data);
          _app.removePlate();
          _app.toggleCartDescription();
          _app.updateCart();
        });
        $(this).attr('disabled','disabled');
        event.preventDefault();
        event.stopPropagation();
        // var number = $(this).parent().siblings().find('.vehicle-number').html();
        // var price = $(this).parent().siblings().find('.vehicle-number').html();
        // $('.ss-minicart .ss-minicart__list').append(html);
      });
    },
    restrictDigits: function(){
      $( ".row-digits input" ).on('keydown', function (e) {
        var length = $(this).val().length;
        if(length > 0){
          $(this).val("");
        }
      });
      $( ".row-digits input" ).on('keyup', function (e) {
        var key = e.which;
        var length = $(this).val().length;
        if(key == 8){
          if(length == 0){
            e.preventDefault();
            $(this).parent().prev('.col-5').find('.form-control').focus()
          }
        }
        else{
          if(length == 0){
            e.preventDefault();
          }
          else{
            e.preventDefault();
            $(this).parent().next('.col-5').find('.form-control').focus()
          }
        }
      });
      
    },
    // umair changes end here 
    fancybox: function(selector){
      $(selector).find(".ss-fancybox").each(function(){
        var $link = $(this),
            type = $link.data('fancybox-type'),
            options = {};

        if (type && type=='ajax') {
          options = {
            width: '80%',
            height: 'auto',
            autoSize: false,
            autoHeight: true,
            autoResize: true,
            autoCenter: true,
            fitToView: true,
            closeBtn: true,
            wrapCSS: 'ss-fancybox',
            maxWidth: '90%',
            maxHeight: '90%'
          }
        }

        $link.fancybox(options);
      });

    },
    // Group collapse btn
    // TODO: remove?
    collapseGroup: function (selector) {
      var _app = this,
        $block = $(selector);

      $block.on('click', '.collapse-group__btn', function () {

        var $currentBtn = $(this),
          $wrap = $currentBtn.closest('.collapse-group'),
          target = $currentBtn.data('target');

        // We prohibit closing if we click on an open
        if (!$currentBtn.is('.collapsed'))
          return false;

        $wrap.find('.collapse-group__btn').not(this).each(function () {
          var target = $(this).data('target');
          $(target).collapse('hide');
        });

        if ($.browser.msie && parseFloat($.browser.version) <= 9) {
          // fix for ie9, swiper don't support ie9
        } else {
          // update swiper in shown collapse
          $(target).one('shown.bs.collapse', function () {
            $(this).find('.swiper-container').each(function () {
              var slider = $(this)[0].swiper,
                subsliders = [slider];

              setTimeout(function () {
                slider.update(); // all update
                slider.slideTo(0);
                _app._checkPagination(subsliders);
              }, 100);

            });
          });
        }

      });
    },

    // Show/Hide related blocks
    relatedToggle: function (selector) {
      var _app = this,
          $block = $(selector);

      $block.on('click', '[data-related]', function () {
        var $currentBtn = $(this),
            $step = $currentBtn.closest('.smart-step'),
            relatedNames = $currentBtn.data('related') ? $currentBtn.data('related').split(',') : [];

        if ($currentBtn.is('[type="checkbox"]') && !$currentBtn.is(':checked'))
          relatedNames = "false";

        _app._toggleRelatedClasses($step, relatedNames);
      });
    },

    // Show/Hide related blocks
    _toggleRelatedClasses: function($step, arrClass){
      var _app = this,
          classes = _app._jsSubtract(relatedList, arrClass);

      $.each(classes.subtract, function (index, name) {
        $step.find('.ss-related_'+name).slideUp(animateDur);
      });
      $.each(classes.intersection, function (index, name) {
        $step.find('.ss-related_'+name).slideDown(animateDur);
      });
    },

    _checkPagination: function (sliders) {
      $.each(sliders, function (index, slider) {
        var $slider = $(slider.container),
          $pagination = $slider.find(slider.params.pagination),
          paginationType = slider.params.paginationType;

        if (paginationType == 'bullets') {
          $slider[slider.bullets.length <= 1 ? 'addClass' : 'removeClass']('ss-swiper_without-pagination');
          $pagination[slider.bullets.length <= 1 ? 'hide' : 'show']();
        }
      });
    },

    swiper: function (selector) {
      var _app = this;

      function setPerView(swiper) {
        var slidesPerView = swiper.params.slidesPerView == 'auto' ? '2' : swiper.params.slidesPerView,
          current = swiper.activeIndex + 1,
          total = swiper.slides.length,
          visibleNumber = (current < total) ? swiper.activeIndex + parseFloat(slidesPerView) : swiper.slides.length;

        $(swiper.container).find('.swiper-pagination-perview').html('View ' + current + '-' + visibleNumber + ' of ' + swiper.slides.length);
      }

      if ($(selector + ' .swiper-container').length) {
        if ($.browser.msie && parseFloat($.browser.version) <= 9) {
          // fix for ie9, swiper don't support ie9
        } else {

          var $swiperSliders = $(selector + ' .swiper-container');
              sliders = [];

          $swiperSliders.each(function (i) {

            if ($(this).is('.ss-swiper_plates')) {

              sliders[i] = new Swiper(this, {
                pagination: '.swiper-pagination',
                spaceBetween: 0,
                slidesPerView: 3,
                paginationClickable: true,
                onInit: function (slider) {
                  var subsliders = [slider];
                  _app._checkPagination(subsliders);
                  setPerView(slider);
                },
                onSlideChangeEnd: function (swiper) {
                  setPerView(swiper);
                },
                // Responsive breakpoints
                breakpoints: {
                  // when window width is <= 374px
                  374: {
                    slidesPerView: 'auto'
                  },
                  // when window width is <= 1199px
                  1199: {
                    slidesPerView: 2
                  }
                }
              });

            } else {
              sliders[i] = new Swiper(this, {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 0,
                onInit: function (slider) {
                  var subsliders = [slider];
                  _app._checkPagination(subsliders);
                }
              });
            }

          });

          // callback when window resize
          var $window = $(window);
          $window.resize(function () {

            var onResize = function () {
              _app._checkPagination(sliders);
            };
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(onResize, 100);

          });
        }
      }

    },

    // Change plate size
    changePlateSize: function() {
      var $wrap = $('.smart-step__wrap');

      $wrap.on('change', '.ss-plate-size__switch', function () {
        var $this = $(this),
            $step = $this.closest('.smart-step__body'),
            $preview = $step.find('.ss-plate-preview'),
            size = $this.data('size'),
            position = $this.data('position');

          if (size == 'short')
            $preview.find('.vehicle-number_' + position).addClass('vehicle-number_s');
          else
            $preview.find('.vehicle-number_' + position).removeClass('vehicle-number_s');
      });
    },

    btnSelectGroup: function () {
      $('body').on('change','.btn-group-select .btn-group .btn input',function() {

        var $this = $(this),
            $wrap = $this.closest('.btn-group-select'),
            $select = $wrap.find('.btn-select .form-control'),
            value = $this.val();
        $select.val(value);
        if (value != '')
          $select.parent().addClass('active');

      }).on('change','.btn-group-select .btn-select .form-control',function() {
        var $this = $(this),
            $wrap = $this.closest('.btn-group-select'),
            $btns = $wrap.find('.btn-group .btn input'),
            value = $this.val();

        if (value == '') {
          $this.closest('.btn').removeClass('active');
          $btns.removeAttr('checked');
        } else {
          $this.closest('.btn').addClass('active');
        }

        $btns.each(function(){
          var $btn = $(this),
              btnValue = $btn.val();
          if (value == '') {
            $btn.parent().removeClass('active');
          }
          if (btnValue == value) {
            $btn.parent('.btn').click()
          }
        });
      });
    },

    validate: function(selector) {
      var $form = $(selector).find('form'),
          options = {
            errorClass: "has-error",
            validClass: "has-success",
            errorElement: "span",
            errorPlacement: function(error, element) {
              error.addClass('help-block help-block_validate').appendTo( element.closest(".form-group") );
            },
            highlight: function(element, errorClass, validClass) {
              $(element).closest(".form-group").addClass(errorClass).removeClass(validClass);
            },
            unhighlight: function(element, errorClass, validClass) {
              $(element).closest(".form-group").removeClass(errorClass).addClass(validClass);
              $(element).closest(".form-group").find('.help-block_validate').remove();
            }
          };

      if($form.length) {
        $form.each(function(){
          $(this).validate(options);
        })
      }

    },

    /***
     * @function datePicker(selector)
     * @short As 'bootstrap-datepicker' is restricted to the date scope (day, month, year), this aims to support too the time picking (hour, minutes).
     *
     * @example
     *
     *   <div class="form-group">
          <label class="control-label" for="formReferenceDateFrom">From date</label>
          <div class="form-control__wrap-date">
            <input type="text" class="form-control validate_date" id="formReferenceDateFrom" name="formReferenceDateFrom" data-date-to-selector="formReferenceDateTo" data-min-date="10.10.2017" data-max-date="20.10.2017" placeholder="eg. 05.08.2017" autocomplete="off">
          </div>
        </div>
     *
     *  data-date-to-selector="formReferenceDateTo" - id selector for bound field
     *  data-date-from-selector="formReferenceDateFrom" - id selector for bound field
     *  data-min-date="10.10.2017" - set min Date YYYY-MM-DD
     *  data-max-date="10.20.2017" - set max Date YYYY-MM-DD
     *
     ***/
    datePicker: function(selector){
      var $block = $(selector),
          $inputs = $block.find('.validate_date');
          //locale = $('html').attr('lang');

      if ($inputs.length) {

        $inputs.each(function(){
          var $input = $(this),
              minDateSelector = $input.data('date-to-selector'),
              maxDateSelector = $input.data('date-from-selector'),
              minDate = $input.data('min-date'),
              maxDate = $input.data('max-date');
              //$parent = $input.closest('.form-control__wrap-date');

          $input.datetimepicker({
            //locale: locale,
            locale: 'en',
            format: 'DD.MM.YYYY',
            useCurrent: !maxDateSelector,
            minDate: minDate ? moment(minDate) : false,
            maxDate: maxDate ? moment(maxDate) : false
          });

          setTimeout(function(){

            if (minDateSelector) {
              var $minDateInput = $('#'+minDateSelector);

              $input.on("dp.change", function (e) {
                $minDateInput.data("DateTimePicker").minDate(e.date);
              });

            }

            if (maxDateSelector) {
              var $maxDateInput = $('#'+maxDateSelector);

              $input.on("dp.change", function (e) {
                $maxDateInput.data("DateTimePicker").maxDate(e.date);
              });

            }

          });


        });

      }

    },

    map: function(selector){

      // Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
      var markers = [
        ['Test 1', 25.185323, 55.245752, 1],
        ['Test 2', 25.197510, 55.274059, 2],
        ['Test 3', 25.209458, 55.289259, 3]
      ];

      function setMarkers(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
          url: '/services/_assets/images/marker.png',
          // This marker is 20 pixels wide by 34 pixels high.
          size: new google.maps.Size(20, 34),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 34).
          anchor: new google.maps.Point(0, 34)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < markers.length; i++) {
          var pin = markers[i];
          var marker = new google.maps.Marker({
            position: {lat: pin[1], lng: pin[2]},
            map: map,
            icon: image,
            shape: shape,
            draggable: true,
            title: pin[0],
            zIndex: pin[3]
          });
        }
      }


      var map,
          $mapBlock = $(selector).find('.ss-map');

      if ($mapBlock.length && $mapBlock.is('#mapYourAddress')) {
        map = new google.maps.Map(document.getElementById('mapYourAddress'), {
          center: {lat: 25.203960, lng: 55.267503},
          zoom: 13
        });

        setMarkers(map);


      }
    },

    rangeSlider: function(selector){
      if($.ui && $.ui.slider) {
        $(selector).find('.ss-range').each(function(){
          var $range = $(this),
              $input = $range.find('input'),
              min = $input.data('min'),
              max = $input.data('max'),
              minText = $input.data('min-text'),
              maxText = $input.data('max-text'),
              currency = $input.data('currency');

          min = min ? min : 0;
          max = max ? max : 0;

          $range.slider({
            range: true,
            min: min,
            max: max,
            step: 1000,
            values: [ min, max ],
            create: function( event, ui ) {
              var addClass = $range.is('.form-group') ? ' form-group' : '';
              $range.append('<div class="ss-range__min"><div class="ss-range__value"><span class="ss-range__value-min">' + min + '</span> ' + currency + '</div><div class="ss-range__description">' + minText + '</div></div>' +
                '<div class="ss-range__max"><div class="ss-range__value"><span class="ss-range__value-max">' + max + '</span> ' + currency + '</div><div class="ss-range__description">' + maxText + '</div></div>').wrap('<div class="ss-range__wrap' + addClass + '"/>').removeClass('form-group');
            },
            slide: function( event, ui ) {
              $input.val(ui.values[ 0 ] + " - " + ui.values[ 1 ]);
              $range.find('.ss-range__value-min').text(ui.values[ 0 ]);
              $range.find('.ss-range__value-max').text(ui.values[ 1 ]);
            }
          });
        });
      }
    },
    /**
     * The function init
     * @param {String|Object} [block] Selector where execute function
     */
    init: function (block) {
      var _app = this;
      _app.collapseGroup(block);
      _app.relatedToggle(block);

      _app.loadStep();
      _app.loadContent();

      _app.changePlateSize();
      _app.btnSelectGroup();
      _app.fixButtonOnScroll();
      _app.toggleDropdown();
      _app.removePlate();
      _app.toggleCartDescription();
      _app.updateDigits();
      _app.restrictDigits();
      _app.update(block);
      

      // Return to preview step
      $('body').on('click','.btn-back-step',function(){
        var $btn = $(this),
            stepId = $btn.data('step-id'),
            $targetStep = $('#smartStep_'+stepId);

        $targetStep.click().find('form')[0].reset();

        if ($targetStep.find('.ss-recaptcha').length)
          grecaptcha.reset();
      })
        // Blind version
        .on('click','.site-control .view',function(){
          //debugger
          var active = $(this).is('.active');
          $('body')[active ? 'addClass' : 'removeClass']('blind-mode');
          var $blindCss = $("[data-blind]");
          if ($blindCss.length){
            $blindCss.each(function(){
              var $this = $(this),
                  blindUrl = $this.data('blind');
              var $blindCommonCss = $("[data-style]");
              console.log($blindCommonCss.length);
              if ($blindCommonCss.length)
                $blindCommonCss.remove();
               else
                $('head').append('<link data-style="blind" rel="stylesheet" href="' + blindUrl + '">');
              /*if ($this.next().data('type')=='blind')
                $this.next().remove();
              else
                $this.after('<link data-type="blind" rel="stylesheet" href="' + blindUrl + '">');*/
            });
          }
        })

        // Remove row
        .on('click','.ss-table__row-remove',function(){
          var $btn = $(this),
              $row = $btn.closest('.ss-table__row');

          if ($row.length) {
            $row.slideUp(animateDur, function () {
              $row.remove();
            });
          }
        })

        // Fancybox close
        .on('click','.ss-fancybox-close',function(){
          $.fancybox.close();
        });
    },
    update: function (selector) {
      var _app = this;
      setTimeout(function(){ // fix for ie
        _app.chart(selector);
        _app.fancybox(selector);
        _app.swiper(selector);
        _app.map(selector);
        _app.validate(selector);
        _app.datePicker(selector);
        _app.rangeSlider(selector);
        _app.addPlate();
        _app.removePlate();
      },40);
    }
  }
}();

/*$(function () {

  $.validator.addMethod("trafficFileNumber", function(value, element) {
    return this.optional( element ) || /^[0-9]{1}[-]{1}[0-9]{9}[-]{1}[0-9]{1}$/.test( value );
  }, 'Please enter a valid traffic file number.');

  $.validator.addMethod("referenceNumber", function(value, element) {
    return this.optional( element ) || /^[0-9]{8}$/.test( value );
  }, 'Please enter a valid reference number.');

  $.validator.addMethod("phoneNumber", function(value, element) {
    return this.optional( element ) || /^[0-9]{3} [0-9]{2} [0-9]{2}$/.test( value );
  }, 'Please enter a valid phone number.');

  $.validator.addMethod("validDate", function(value, element) {
    return this.optional( element ) || /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test( value );
  }, 'Please enter a valid date.');

  $.validator.addClassRules({
    validate_plate_number: {
      required: true,
      digits: true,
      minlength: 5,
      maxlength: 5
    },
    validate_traffic_file_number : {
      required: true,
      trafficFileNumber: true
    },
    validate_reference_number: {
      required: true,
      referenceNumber: true
    },
    validate_phone_code : {
      digits: true,
      minlength: 2,
      maxlength: 2
    },

    validate_phone_number : {
      //phoneNumber: true
      digits: true,
      minlength: 7,
      maxlength: 10
    },

    validate_phone_code_required : {
      required: true,
      digits: true,
      minlength: 2,
      maxlength: 2
    },

    validate_company_license : {
      required: true,
      digits: true,
      minlength: 15,
      maxlength: 15
    },

    validate_phone_number_required : {
      required: true,
      //phoneNumber: true
      digits: true,
      minlength: 7,
      maxlength: 10
    },

    validate_date : {
      required: true,
      //date: true,
      validDate: true
    },

    validate_po_box : {
      required: true,
      digits: true,
      minlength: 6,
      maxlength: 6
    }

  });

  if ($('html').attr('dir')=='rtl'){
    
     * Translated messages for the jQuery validation plugin.
     * Locale: AR (Arabic; العربية)
     
    $.extend( $.validator.messages, {
      trafficFileNumber: "Please enter a valid traffic file number.",
      referenceNumber: "Please enter a valid reference number.",
      phoneNumber: "Please enter a valid phone number.",
      validDate: "Please enter a valid date.",
      required: "هذا الحقل إلزامي",
      remote: "يرجى تصحيح هذا الحقل للمتابعة",
      email: "رجاء إدخال عنوان بريد إلكتروني صحيح",
      url: "رجاء إدخال عنوان موقع إلكتروني صحيح",
      date: "رجاء إدخال تاريخ صحيح",
      dateISO: "رجاء إدخال تاريخ صحيح (ISO)",
      number: "رجاء إدخال عدد بطريقة صحيحة",
      digits: "رجاء إدخال أرقام فقط",
      creditcard: "رجاء إدخال رقم بطاقة ائتمان صحيح",
      equalTo: "رجاء إدخال نفس القيمة",
      extension: "رجاء إدخال ملف بامتداد موافق عليه",
      maxlength: $.validator.format( "الحد الأقصى لعدد الحروف هو {0}" ),
      minlength: $.validator.format( "الحد الأدنى لعدد الحروف هو {0}" ),
      rangelength: $.validator.format( "عدد الحروف يجب أن يكون بين {0} و {1}" ),
      range: $.validator.format( "رجاء إدخال عدد قيمته بين {0} و {1}" ),
      max: $.validator.format( "رجاء إدخال عدد أقل من أو يساوي {0}" ),
      min: $.validator.format( "رجاء إدخال عدد أكبر من أو يساوي {0}" )
    } );
  }

  serviceApp.init('body');

  var $window = $(window);

   $window.resize(function () {

   var onResize = function(){
   app.update('body');
   };
   window.clearTimeout(resizeTimeout);
   resizeTimeout = window.setTimeout(onResize, 100);

   });
});*/

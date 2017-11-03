"use strict";
/* -------------------------------------
 Google Analytics
 change UA-XXXXX-X to be your site's ID.
 -------------------------------------- */
(function (b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
            function () {
                (b[l].q = b[l].q || []).push(arguments)
            });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-101009114-1', 'auto');
ga('send', 'pageview');

function dothis(){
  document.location.href = "/gallery";
}
/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
$(document).ready(function (e) {

    var gallery = document.getElementById('btngallery');
    gallery.addEventListener("click", dothis);

    /* -------------------------------------
     HOME SLIDER
     -------------------------------------- */
    $("#home-slider").owlCarousel({
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: true,
        // pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     HOME SLIDER TWO
     -------------------------------------- */
    $('#bx-home-slider').bxSlider({
        mode: 'vertical',
        slideMargin: 5
    });
    /* -------------------------------------
     PRETTY PHOTO GALLERY
     -------------------------------------- */
    $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"));
    });
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        show_title: false,
        social_tools: false
    });
    /* -------------------------------------
     PROGRESS BAR
     -------------------------------------- */
    try {
        $('#our-skill').appear(function () {
            jQuery('.skill-holder').each(function () {
                jQuery(this).find('.skill-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {
    }
    try {
        $('#our-skill1').appear(function () {
            jQuery('#our-skill1 .skill-holder').each(function () {
                jQuery(this).find('.skill-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {
    }
    /* ---------------------------------------
     OUR PRODUCT GALLERY
     -------------------------------------- */
    var $container = $('.portfolio-content');
    // set selected menu items
    var $optionSets = $('.option-set');
    var $optionLinks = $optionSets.find('a');
    function doIsotopeFilter() {
        if ($().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function () {
                var selector = $(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            $(window).load(function () {
                $container.isotope({
                    itemSelector: '.portfolio-item',
                    filter: isotopeFilter
                });

            });
            $optionLinks.each(function () {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                if (selector == isotopeFilter) {
                    if (!$this.hasClass('selected')) {
                        var $optionSet = $this.parents('.option-set');
                        $optionSet.find('.selected').removeClass('selected');
                        $this.addClass('selected');
                    }
                }
            });
            $optionLinks.on('click', function () {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                $container.isotope({itemSelector: '.portfolio-item', filter: selector});
                if (!$this.hasClass('selected')) {
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                }
                return false;
            });
        }
    }
    var isotopeTimer = window.setTimeout(function () {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
    }, 1000);
    var selected = $('#gallery-cats > li > a');
    var $this = $(this);
    selected.on('click', function () {
        if (selected.hasClass('selected')) {
            $(this).parent().addClass('select').siblings().removeClass('select');
        }
    });
    /* ---------------------------------------
     TESTIMONIALS SLIDER
     -------------------------------------- */
    $("#tg-testi-slider").owlCarousel({
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /***********************************/
    /*GOOGLE MAP*/
    /**********************************/
    // gmap version 6
    // $("#tg-map").gmap3({
    //     marker: {address: "8, Avenue Mohamed Sijilmassi, Casablanca, Maroc"},  /* 8, Avenue Mohamed Sijilmassi, Casablanca, Maroc  ==  Haltern am See, Weseler Str. 151 */
    //     map: {options: {zoom: 16}},
    //     mapTypeId: google.maps.MapTypeId.HYBRID,
    //     mapTypeControlOptions: {
    //       style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    //     },
    //     scrollwheel: false,
    //     navigationControl: false,
    //     mapTypeControl: false,
    //     scaleControl: false,
    //     draggable: false
    // });
    // gmap version 7
    var center = [33.599319, -7.648941];  // 33.595292 ,-7.646922
    $("#tg-map").gmap3({
        center: center,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.PLAN,
        mapTypeControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false
      })
    .marker({
        position:[33.599319, -7.648941],
        // address: "8, Avenue Mohamed Sijilmassi, Casablanca, Maroc",
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
        });
    /* ---------------------------------------
     POSTS SLIDER
     -------------------------------------- */
    var owl = $("#tg-posts-slider");
    owl.owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        autoPlay : true,
        slideSpeed: 200,
        paginationSpeed: 400,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* ---------------------------------------
     TEAM SKILL SLIDER
     -------------------------------------- */
    $("#tg-skill-team-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        autoPlay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     THEME ACCORDION
     -------------------------------------- */
    $('.accordion .tg-panel-heading a').on('click', function () {
        $('.tg-panel-heading').removeClass('actives');
        $(this).parents('.tg-panel-heading').addClass('actives');
        $('h3').removeClass('actives');
        $(this).parent().addClass('actives');
    });
    $('.accordion .tg-panel-heading a').on('click', function () {
        $('.tg-panel-heading').removeClass('actives');
        $(this).parents('.tg-panel-heading').addClass('actives');
        $('h3').removeClass('actives');
        $(this).parent().addClass('actives');
    });
////	 -------------------------------------
//			NAVIGATION
//	 --------------------------------------
    /* ---------------------------------------
     PRELOADER
     --------------------------------------- */
    /*will first fade out the loading animation*/
    $("#status").fadeOut();
    /*will fade out the whole DIV that covers the website.*/
    $(".preloader").delay(1000).fadeOut("slow");
    $("body").css('overflow-y', 'visible');
    $("body").css('position', 'relative');

    /* ---------------------------------------
     POSTS SLIDER
     --------------------------------------- */

    var $window = $(window),
            flexslider;
    // tiny helper function to add breakpoints
    function getGridSize() {
        return (window.innerWidth < 600) ? 2 :
                (window.innerWidth < 900) ? 3 : 5;
    }
    /*$(function() {
     SyntaxHighlighter.all()
     });*/

    $window.load(function () {
        $('#tg-nav-tabsslider').flexslider({
            move: 0,
            itemWidth: 210,
            touch: true,
            slideshow: false,
            controlNav: false,
            animation: "slide",
            animationLoop: false,
            prevText: "<i class='fa fa-angle-left'></i>",
            nextText: "<i class='fa fa-angle-right'></i>",
            minItems: getGridSize(),
            maxItems: getGridSize()
        });
        /* -------------------------------------
         PORTFOLIO GALLERY
         -------------------------------------- */
        $('#tg-project-gallery').isotope({
            layoutMode: 'fitRows',
            itemSelector: '.grid-item'
        });
        $('.portfolio-content').isotope({
            itemSelector: '.portfolio-item'
        });
    });
    /* ---------------------------------------
     Ajax Code for Contact Form
     --------------------------------------- */
    jQuery('.contact_wrap').on('click', '.contact_now', function (e) {
        e.preventDefault();
        var $this = jQuery(this);

        var serialize_data = $this.parents('.contact_wrap').find('.contact_form').serialize();
        var dataString = serialize_data;

        $this.parents('.contact_wrap').find('.message_contact').html('').hide();
        jQuery($this).parents('fieldset').append("<i class='fa fa-refresh fa-spin'></i>");
        $this.parents('.contact_wrap').find('.message_contact').removeClass('alert-success');
        $this.parents('.contact_wrap').find('.message_contact').removeClass('alert-danger');

        var path = document.location
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/'));
        var dir = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));

        jQuery.ajax({
            type: "POST",
            url: dir + '/php/mailer.php',
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery($this).parents('fieldset').find('i').remove();
                jQuery('.message_contact').show();
                if (response.type == 'error') {
                    $this.parents('.contact_wrap').find('.message_contact').addClass('alert alert-danger').show();
                    $this.parents('.contact_wrap').find('.message_contact').html(response.message);
                } else {
                    $this.parents('.contact_wrap').find('.contact_form').get(0).reset();
                    $this.parents('.contact_wrap').find('.message_contact').addClass('alert alert-success').show();
                    $this.parents('.contact_wrap').find('.message_contact').html(response.message);
                }
            }
        });

        return false;

    });
    // Select all links with hashes
    $('a[href*="#"]')
   // Remove links that don't actually link to anything
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
     // On-page links
     if (
       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       &&
       location.hostname == this.hostname
     ) {
       // Figure out element to scroll to
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       // Does a scroll target exist?
       if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000, function() {
           // Callback after animation
           // Must change focus!
           var $target = $(target);
           $target.focus();
           if ($target.is(":focus")) { // Checking if the target was focused
             return false;
           } else {
             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
             $target.focus(); // Set focus again
           };
         });
       }
     }
   });

// follow the anchors Main menu
   $("#menu li").click(function(){
     $("li").removeClass("current-menu-item");
     $(this).addClass("current-menu-item");
   });
   // Cache selectors
   var lastId,
       topMenu = $("#menu"),
       topMenuHeight = topMenu.outerHeight()+15,
       // All list items
       menuItems = topMenu.find("a"),
       // Anchors corresponding to menu items
       scrollItems = menuItems.map(function(){
         var item = $($(this).attr("href"));

         if (item.length) { return item; }
       });

   // Bind click handler to menu items
   // so we can get a fancy scroll animation
   menuItems.click(function(e){
     var href = $(this).attr("href"),
         offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
     $('html, body').stop().animate({
         scrollTop: offsetTop
     }, 300);
     e.preventDefault();
   });

   // Bind to scroll
   $(window).scroll(function(){
      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          menuItems
            .parent().removeClass("current-menu-item")
            .end().filter("[href='#"+id+"']").parent().addClass("current-menu-item");
          }

});



});

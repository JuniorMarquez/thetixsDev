/* -------------------------------------------

Name: 		App Showcase
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

//color switcher
$(document).ready(function () {
    // Color switcher
    $('.cog').on('click', function () {
        $('#color-sw').toggleClass('active-switcher');
    });
});

(function ($j) {
    switch_style = {
        onReady: function () {
            this.switch_style_click();
        },
        switch_style_click: function () {
            $(".box").click(function () {
                var id = $(this).attr("id");

                $("#switch_style").attr("href", "assets/css/color-theme/" + id + ".css");
            });
        },
    };
    $j().ready(function () {
        switch_style.onReady();
    });

})(jQuery);

$(function () {

    "use strict";
    
    //preloader
    $(window).on('load', function () {
        $(".status").fadeOut();
        $(".preloader").delay(500).fadeOut("slow");
    })

    //navigation scrollspy
    var lastId,
        topMenu = $("#navigation"),
        topMenuHeight = topMenu.outerHeight() - 0,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    //scrollspy smooth scroll 
    menuItems.on("click", function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        //default speed: 1200
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
        e.preventDefault();
    });


    //Active nav link
    $(window).on("scroll", function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }

        //navbar color after scroll
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            $(".navbar").addClass("bg-scroll");
        } else {
            $(".navbar").removeClass("bg-scroll");
        }
    });

    // Testimonials slider
    $("#owl").owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        navSpeed: 1000,
        navContainer: '.nav-container',
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }

    });

    // brands slider
    $('.brands-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // close popup
    $(".popup").on('click', function () {
        $(".popup").removeClass("active-popup");
        $(".popup").addClass("n-active-popup");
    });

})(jQuery);

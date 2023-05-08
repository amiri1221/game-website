$('#owl-carousel-one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})
$('#owl-carousel-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$(document).ready(function () {
    window.addEventListener('scroll', () => {
        const winScroll = window.pageYOffset;
        if (winScroll > 20) {
            $('.scroll-page').css("transform", `translate(0px,10px)`);
            $('.scoroll-button div').css("transform", `translate(0px,10px)`);

        }
        else if (winScroll < 20) {
            $('.scroll-page').css("transform", `translate(0px,0px)`);
            $('.scoroll-button div').css("transform", `translate(0px,0px)`);

        }
    })

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('.show-click-box').removeClass("show-slider")
        } else {
            $('.owl-carousel .item img').click(function (event) {
                event.preventDefault()
                $('.show-click-box').addClass("show-slider")
            })
            $('.btn-show').click(function () {
                $('.show-click-box').removeClass("show-slider")
            })
        }
    }

    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    $('#hamberger').click(function () {
        $('.navigation').slideToggle();
    })

    $('.navigation ul li ul').before("<i class='sub-menu-arrow fa fa-angle-left'></i> ");

    $(".navigation .sub-menu-arrow").click(function () {
        if ($(this).hasClass("fa-angle-left")) {
            $(this).next(".navigation ul li ul").slideToggle();
            $(this).removeClass("fa-angle-left").addClass("fa-angle-down");
        }
        else {
            $(this).next(".navigation ul li ul").hide(500);
            $(this).removeClass("fa-angle-down").addClass("fa-angle-left");
        }

    });

    $(".search-box i").click(function () {
        $('.search-box input').toggleClass("withinput")
    });


    $(".search-mobile .first-icon-search").click(function () {
        $('.search-mobile input').toggleClass("withinput")
        $('.search-icon i').toggleClass("withinput2")
    });


    $('#box-info-game-1').hover(function () {
        $('.text-box-information1').toggleClass("boxvisible")
        $('#img-hover-id-3').toggleClass("imgvisible")
        $('#hover-text-1').toggleClass("text-top-border")
        $('#hover-text-1 h5').toggleClass("text-top-info")
        $('#hover-text-1 :nth-child(2)').toggleClass("transscale")
        $('#hover-text-1 :nth-child(3)').toggleClass("text-top-info")
        $('#box-hover-link1').toggleClass("d-block")
    })

    $('#box-info-game-2').hover(function () {
        $('.text-box-information2').toggleClass("boxvisible")
        $('#img-hover-id-1').toggleClass("imgvisible")
        $('#hover-text-2').toggleClass("text-top-border")
        $('#hover-text-2 h5').toggleClass("text-top-info")
        $('#hover-text-2 :nth-child(2)').toggleClass("transscale")
        $('#hover-text-2 :nth-child(3)').toggleClass("text-top-info")
        $('#box-hover-link2').toggleClass("d-block")
    })

    $('#box-info-game-3').hover(function () {
        $('.text-box-information3').toggleClass("boxvisible")
        $('#img-hover-id-2').toggleClass("imgvisible")
        $('#hover-text-3').toggleClass("text-top-border")
        $('#hover-text-3 h5').toggleClass("text-top-info")
        $('#hover-text-3 :nth-child(2)').toggleClass("transscale")
        $('#hover-text-3 :nth-child(3)').toggleClass("text-top-info")
        $('#box-hover-link3').toggleClass("d-block")
    })

});

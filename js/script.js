$(document).ready(function() {

    $(window).scroll(function() {

        var scrolll = $(this).scrollTop();

        if (scrolll >= 50) {

            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    })


    $('nav button').click(function() {
        $('nav ul li').slideToggle()
    })



    var typed = new Typed('.element', {
        strings: ["Omar khaled", " a Developer", "a Designer", " a Businessman"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000,

    });




    // this to make the  websitedont start only when the offset be in the section and i use this plugins


    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:100%;transition:1.2s all")
            p[1].setAttribute("style", "width:80%;transition:1.5s all")
            p[2].setAttribute("style", "width:87%;transition:1.7s all")
            p[3].setAttribute("style", "width:77%;transition:1.9s all")
            p[4].setAttribute("style", "width:70%;transition:2.2s all")
            p[5].setAttribute("style", "width:100%;transition:2.5s all")
        },
        offset: "40%"
    });




})
/*global $,owl,WOW*/
$(document).ready(function () {


    /*Slide Toggle*/
    $("#aboutUsClick").click(function () {
        $("#aboutUs").slideToggle();
    });

    $("#servicesClick").click(function () {
        $("#services").slideToggle();
    });

    $("#productsClick").click(function () {
        $("#products").slideToggle();
    });

    $("#newsClick").click(function () {
        $("#news").slideToggle();
    });

    /*Services Owl Carousel*/
    $("#owl-one").owlCarousel({
        loop: true,
        center: true,
        items: 4,
        margin: 30,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        stopOnHover: true,
        navText: ['<i class="fa fa-angle-left "></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            },
            1170: {
                items: 3
            }
        }

    });
    /*Products Owl Carousel*/
    $("#owl-two").owlCarousel({
        loop: true,
        center: true,
        items: 4,
        margin: 50,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class="fa fa-angle-left "></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 3
            }
        }

    });
    /*Parteners Owl Carousel*/
    /*Products Owl Carousel*/
    $("#owl-three").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        slideSpeed: 200,
        pagination: true,
        smartSpeed: 900,
        autoplayHoverPause: true,
        stopOnHover: true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }

    });
    /*wow animation initial*/
    new WOW({
        offset: 50, // default
    }).init();
    /*Loading Before Animation*/
    var content = document.getElementById("myContent");
    content.classList.add('js-loading');
    window.addEventListener("load", showPage);

    function showPage() {
        content.classList.remove('js-loading');
    }
    
    
    /*SideBar Button Mobile*/
    $("#mobile-btn").click(function () {
        $("#myNav").toggleClass("expand");
        $(this).css("z-index", "99");
    });
})
/*PreLoader Script*/
//$(window).load(function()
//{
//$('body, html').css({'overflow-x':'hidden','overflow-y':'auto', 'height':'auto', 'position':'relative'});
//$(".screen").fadeOut("slow");
//});
var _height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var _block_height = Math.round(_height / 9);
var _block_width = Math.ceil(_width / 16);
var _animation_delay = 0.03;
var _blocks = "<div id='unfold-block'><st" + "yle> .unfold-box{ width:" + _block_width + "px;" + "height:" + _block_height + "px; } </st" + "yle>";
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 15; j++) {
        _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;'></div>"
        _animation_delay += 0.03;
    }
    _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;width:" + (_width - (_block_width * 15)) + "px;'></div>";
    _animation_delay += 0.03;
}


_blocks += "<div id='loader'><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>";
document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', _blocks);
document.getElementsByTagName("body")[0].style.overflow = "hidden";
setTimeout(function () {

    var _blocksDOM = document.querySelectorAll(".unfold-box");
    for (var k = 0; k < _blocksDOM.length; k++) {
        var block = _blocksDOM[k];
        block.classList.add("clear");
    }
    document.getElementById("unfold-block").classList.add("clear");
}, 2000);

setTimeout(function () {
    document.getElementById('loader').classList.add('clear');
}, 4000);

setTimeout(function () {
    document.getElementById("unfold-block").remove();
    $('body, html').css({
        'overflow-x': 'hidden',
        'overflow-y': 'auto',
        'height': 'auto',
        'position': 'relative'
    });
}, 7000);

/*Open SideNav*/
//function openNav() {
//    
//    document.getElementById("myNav").style.width = "100%";
//    
//}
/*Close SideNav*/
//function closeNav() {
//    document.getElementById("myNav").style.width = "0%";
//    
//}
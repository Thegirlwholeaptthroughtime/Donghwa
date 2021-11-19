

/* 글로벌 메뉴 */

$('.global_img').click(function () {
    $('.global_txt').slideToggle();

    //$('.global_txt').slideDown();
    $(this).toggleClass("on");
})








/* 와우 애니메이션 */

var wow = new WOW({

    boxClass: 'wow', // animated element css class (default is wow)

    animateClass: 'animated', // animation css class (default is animated)

    offset: 0, // distance to the element when triggering the animation (default is 0)

    mobile: true, // trigger animations on mobile devices (default is true)

    live: true, // act on asynchronously loaded content (default is true)

    callback: function (box) {

        // the callback is fired every time an animation is started

        // the argument that is passed in is the DOM node being animated

    },

    scrollContainer: null, // optional scroll container selector, otherwise use window,

    resetAnimation: true, // reset animation on end (default is true)

});

wow.init();



/* 지앤비 */

$('.gnbc').hover(
    function () {
        $(this).find('.submenu').stop().slideDown();
    },
    function () {
        $(this).find('.submenu').stop().slideUp();
    }
);
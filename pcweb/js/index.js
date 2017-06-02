require('../less/index.less');

var Swiper = require('swiper');

$(function () {
    $('.myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
});
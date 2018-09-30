

// 关于我们
var height = $(".right").height();
$(".sidebar").height(height);

// 相册查看
baguetteBox.run('.baguetteBoxOne');

// 首页的轮播图
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    paginationClickable: true,
    spaceBetween: 60,
    freeMode: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

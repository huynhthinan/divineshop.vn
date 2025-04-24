// $(document).ready(function () {
//   var myCarousel = new bootstrap.Carousel($('#bannerSlider')[0], {
//     interval: 3000,
//     wrap: true,
//     pause: 'hover',
//     ride: 'carousel'
//   });
// });


$(document).ready(function () {
    // Khi nhấp vào nút navbar-toggler, toggle class show/hide
    $('.navbar-toggler').click(function() {
        $('#mainNavbar').toggleClass('show hide');
    });

    // Khi nhấp vào bên ngoài navbar, ẩn navbar
    $(document).click(function(event) {
        if (!$(event.target).closest('#mainNavbar').length && !$(event.target).closest('.navbar-toggler').length) {
            $('#mainNavbar').removeClass('show').addClass('hide');
        }
    });
});
$(document).ready(function () {
    $('.toggle-sidebar-btn').click(function () {
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('move-sidebar');
        $('.main').toggleClass('move-main');
        $('.footer').toggleClass('move-footer');
    });
});
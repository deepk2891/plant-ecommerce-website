$(document).ready(function () {
    $('.toggle-sidebar-btn').click(function () {
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('move-sidebar');
        $(this).toggleClass("ri-side-bar-line ri-side-bar-fill");
    });
});
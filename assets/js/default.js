$(function() {

    $('.jump-to').on('click', function(e) {

        e.preventDefault();

        height = $($(this).data('jump')).offset().top;

        $("html, body").animate({ scrollTop: height }, 800);

        return false;

    });

});
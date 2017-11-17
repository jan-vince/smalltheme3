$(function() {

    $('.jump-to').on('click', function(e) {

        e.preventDefault();

        if( $($(this).data('jump')).length ) {

            height = $($(this).data('jump')).offset().top;

            $("html, body").animate({ scrollTop: height }, 800);

        }

        return false;

    });

});

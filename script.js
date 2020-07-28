$('.splash').each(function(index) {
    $(this).css({
        left: Math.random() * ($('.container').width() - $(this).width()),
        top: Math.random() * ($('.container').height() - $(this).height())
    });
});

// *Make elements draggable*
$(document).ready(function() {
    $(".splash").draggable({
        stack: ".splash"
    });
});

// *make hand grab*
$(".splash").on("mousedown touchstart", function(e) {
    $(this).addClass('grabbing')
})

$(".splash").on("mouseup touchend", function(e) {
    $(this).removeClass('grabbing')
})

// *make page slideshow*
$(document).ready(function() {
    $('.image').first().addClass('active');
    $('.image').hide();
    $('.active').show();

    $('.image').click(function() {

        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.sp').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');



    });

});
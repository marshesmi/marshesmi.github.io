(function() {

    var $image = $('.image');
    var i = 0;

    $('.image').on('click', function() {
        i = (i + 1) % $image.length;
        $image.hide().eq(i).show();
    });

})();

(function() {

    var $image = $('.image2');
    var i = 0;

    $('.image2').on('click', function() {
        i = (i + 1) % $image.length;
        $image.hide().eq(i).show();
    });

})();

(function() {

    var $image = $('.image3');
    var i = 0;

    $('.image3').on('click', function() {
        i = (i + 1) % $image.length;
        $image.hide().eq(i).show();
    });

})();

(function() {

    var $image = $('.image4');
    var i = 0;

    $('.image4').on('click', function() {
        i = (i + 1) % $image.length;
        $image.hide().eq(i).show();
    });

})();






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
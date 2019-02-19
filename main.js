$(document).ready(function () {
    $('.image').click(function () { 
        $('.overlay').fadeIn(500);
        $('.popup').fadeIn(500);
    });
    $('.close-btn').click(function () { 
        $('.overlay').fadeOut(500);
        $('.popup').fadeOut(500);
    });

    $('.overlay').click(function () { 
        $('.overlay').fadeOut(500);
        $('.popup').fadeOut(500);
    });

    $('#whale').click(function () { 
        $('.popup-whale').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#corals').click(function () { 
        $('.popup-corals').fadeIn(500);
        $('.overlay').fadeIn(500);
    });

});

/*    
    $('#corals').click(function () { 
        $('.popup-corals').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#diving').click(function () { 
        $('.popup-diving').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#dolphin').click(function () { 
        $('.popup-dolphin').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#fish').click(function () { 
        $('.popup-fish').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#shells').click(function () { 
        $('.popup-shells').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#star').click(function () { 
        $('.popup-star').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#turtle').click(function () { 
        $('.popup-turtle').fadeIn(500);
        $('.overlay').fadeIn(500);
    });
    $('#waterplants').click(function () { 
        $('.popup-waterplants').fadeIn(500);
        $('.overlay').fadeIn(500);
    });*/
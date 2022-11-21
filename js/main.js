(function ($) {
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

//  2
const scrollbar_hidden=document.querySelector("body");
var trailer=document.querySelector(".trailer");
function toggle(){
    var video=document.querySelector("video");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime=0;
    scrollbar_hidden.classList.add('scrollbar_hide');
}

function toggle_close(){
    // const closee=document.querySelector(".close");    
    trailer.classList.remove('active');
    scrollbar_hidden.classList.remove('scrollbar_hide');
}

const intro=introJs();

function restartTour() {
    intro.setOptions({
        steps:[{
            intro: 'Welcome to grizla tech.'
        },
        {
            element:'#step-one',
            intro: 'This is our project section.'
        },
        {
            element:'#step-two',
            intro: 'Here you can see our project.'
        },
        {
            element:'#step-three',
            intro: 'You can search us on social media.'
        },
        {
            element: '#step-four',
            intro: 'Here you can see project gallery.'
        }
        ]
    })
    intro.start();
}
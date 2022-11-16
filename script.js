// hamberger menu

let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');


menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



// slider
var slideIndex = 1;
        showSlides(slideIndex);
  
        function plusSlides(n) {
          showSlides((slideIndex += n));
        }
  
        function currentSlide(n) {
          showSlides((slideIndex = n));
        }
  
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {
            slideIndex = 1;
          }
          if (n < 1) {
            slideIndex = slides.length;
          }
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active";
        }



// Viraj Js
// (function ($) {

//   // Portfolio isotope and filter
//   var portfolioIsotope = $('.portfolio-container').isotope({
//       itemSelector: '.portfolio-item',
//       layoutMode: 'fitRows'
//   });
//   $('#portfolio-flters li').on('click', function () {
//       $("#portfolio-flters li").removeClass('active');
//       $(this).addClass('active');

//       portfolioIsotope.isotope({filter: $(this).data('filter')});
//   });
  
// })(jQuery);

// //  2
// const scrollbar_hidden=document.querySelector("body");
// var trailer=document.querySelector(".trailer");
// function toggle(){
//   var video=document.querySelector("video");
//   trailer.classList.toggle("active");
//   video.pause();
//   video.currentTime=0;
//   scrollbar_hidden.classList.add('scrollbar_hide');
// }

// function toggle_close(){
//   // const closee=document.querySelector(".close");    
//   trailer.classList.remove('active');
//   scrollbar_hidden.classList.remove('scrollbar_hide');
// }
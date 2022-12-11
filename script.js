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

        const interval= setInterval(function(){ plusSlides(1);},5000);

// featurs

let gt_logo=document.querySelector('.click_me_GT');
let featurs1=document.querySelector('.featurs');
let cross_logo=document.querySelector('.cross_logo');
let chick_me_msg =document.querySelector('.click_me_message');






gt_logo.addEventListener('click',()=>{
  featurs1.style.display='block';
  gt_logo.style.display='none';
  cross_logo.style.display='flex';
  chick_me_msg.style.display='none';
  
})
cross_logo.addEventListener('click',()=>{
  featurs1.style.display='none';
  gt_logo.style.display='flex';
  cross_logo.style.display='none';
  chick_me_msg.style.display="flex";
  
 

})


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

// featurs

let gt_logo=document.querySelector('.click_me_GT');
let featurs1=document.querySelector('.featurs');
let cross_logo=document.querySelector('.cross_logo');
let chat_img = document.querySelector('#chat-bot-launcher-container');
let chat_msg=document.querySelector('#chat-bot-message-container')


gt_logo.addEventListener('click',()=>{
  featurs1.style.display='block';
  gt_logo.style.display='none';
  cross_logo.style.display='flex';
  chat_img.style.display="flex";
  chat_msg.style.display="flex";
  
})
cross_logo.addEventListener('click',()=>{
  featurs1.style.display='none';
  gt_logo.style.display='flex';
  cross_logo.style.display='none';
 

})


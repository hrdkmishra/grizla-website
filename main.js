const ongoing=document.getElementById("ongoing");
const allProjects=document.getElementById("All");
const completeProjects=document.getElementById("first");
const second=document.getElementById("second");
function ongoing_active(){
    allProjects.classList.remove('active');
    completeProjects.classList.remove('active');
    var first=document.querySelector(".first");
    first.classList.add("disable_css")
    second.classList.add('active');
   
}

function complete_active(){
    allProjects.classList.remove('active');
    second.classList.remove('active');
    var first=document.querySelector(".first");
    first.classList.remove("disable_css")
    completeProjects.classList.add('active');
}

function all_active(){
    completeProjects.classList.remove('active');
    second.classList.remove('active');
    var first=document.querySelector(".first");
    first.classList.remove("disable_css")
    allProjects.classList.add('active');
}


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
    var video=document.querySelector("video");
    trailer.classList.remove('active');
    scrollbar_hidden.classList.remove('scrollbar_hide');
    video.pause()
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
        }
        ]
    })
    intro.start();
}
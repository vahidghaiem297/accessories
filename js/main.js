
$('#main').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('#blog').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('#all-products').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});


$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

function showBox() {
    document.getElementById("result").style.display="grid";
}
window.onload = function(){
    AOS.init({

        'duration':1000,
        'once':true,
        'mirror':false,
        'easing':'ease-in-out'
    });
}

function openSearch() {
 document.getElementById("search").style.transform="scale(1)";   
}
var dropdown_btn = document.getElementsByClassName("service-btn");

for (var i = 0; i < dropdown_btn.length; i++) {
    dropdown_btn[i].addEventListener("mouseover", function(){
        var panel = this.nextElementSibling;
        if (!panel.style.maxHeight) {
            panel.style.maxHeight = panel.scrollHeight + "px";
          
        } 
    })
    
}
for (var i = 0; i < dropdown_btn.length; i++) {
    dropdown_btn[i].addEventListener("mouseleave", function(){
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          
        } 
    })

}
var slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        $('.slides').fadeOut(2000);
        slides[i].style.display = "none";
    }
 
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
   
  
    $(slides[slideIndex - 1]).fadeIn(2000);
    dots[slideIndex - 1].className +=" active";

}

var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
    this.classList.toggle("activate");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }


    });
    
}
var menu = document.getElementById("menu");
var close = document.getElementById("close");
menu.onclick = function(){
    document.getElementById("sidebar").style.width="300px";
   
}
close.onclick = function(){
    document.getElementById("sidebar").style.width="0px";
   
}


var SignIn = document.getElementById("signin");
SignIn.onclick = function(){
    document.getElementById("signin-modal").style.width="100%";
} 
function closeModal() {
    document.getElementById("signin-modal").style.width="0";
}

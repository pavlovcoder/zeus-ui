//Automatic slideshow image in home page:
var slideIndex = 0;
showSlides();

function showSlides() {
    
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    for (i=0; i<slides.length;i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex>slides.length) {slideIndex=1}
    
    for (i=0;i<dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    setTimeout(showSlides, 4500);
}
//Automatic slideshow image in home page

//Button of switch language:
function Change_language() {
    
    document.getElementById("language").classList.toggle("show");
}

window.onclick = function(e) {
    if(!e.target.matches('.btn_language')) {
        var language = document.getElementById("language");
        if(language.classList.contains('show')) {
            language.classList.remove('show');
        }
    }
}

//Special overlays panels
/*function openNav1() {
    document.getElementById("myNav1").style.width = "50%";
}

function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
}*/

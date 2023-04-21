// controlling the carousel of images for the slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2.5 seconds
}

// controlling destination for buttons 
document.getElementById("learn-btn").onclick = function () {
  location.href = "about.html"
}
document.getElementById("quote-btn").onclick = function () {
  location.href = "contact.html"
}
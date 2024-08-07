
const menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#555'; // Üzerine gelindiğinde arka plan rengini değiştir
  });

  item.addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; // Fare çekildiğinde arka plan rengini eski haline getir
  });
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex - 1].style.display = "block";  
}



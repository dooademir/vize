let fruits = ['Apple', 'Banana','Orange', 'Mango'];
console.log(fruits[0]); 
fruits.push('Grapes');
console.log(fruits)
fruits.splice(1,1)
console.log(fruits)
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['Reading', 'Travelling'],
    address: {
        street: '123 Main St.',
        city: 'Anytown',
        country: 'USA'
    }
}

console.log(person)
console.log(person.firstName);
console.log(person.address.city);
person.age = 31;
person.hobbies.push('Cooking');
console.log(person)
for(let i =0; i<5; i++){
    console.log(i);
}

for (let i =0; i<fruits.length; i++ ) {
    console.log(fruits[i]);
}

for (let key in person) {
    console.log(key + ":" +person[key]);
}

let x=3;
if (x>5) {
    console.log ("Hello")
}else {console.log("bye")
}

let hour =10;
if (hour<12) {
    console.log("good morning");
} else {
    console.log ("Good afternoon");
}


let age=19;
if(age>=18) {
    if (age<21) {
        console.log("you are an adult but not yet allowed to drink.");
    } else {
        console.log("you are an adult and allowed to drink.");
    }
    
} else {
    console.log ("you are a minor.")
}


let score=55;
if(score>=70) {
    if (score<90) {
        console.log("Başarılı");
    } else {
        console.log("Çok Başaralı");
    }
    
} else {
    console.log ("Başarısız")
}

let aa= document.getElementById('aylin');
let bb= document.getElementsByClassName('ortala');
let cc= document.getElementsByTagName('div');


console.log(aa)
console.log(bb)
console.log(cc)

aa.innerHTML= 'Projeler!'

function changeImageSource() {
    let myImage=document.getElementById('myImg');

let newImageSource ='DD.png';
myImage.setAttribute('src',newImageSource);
myImage.setAttribute('alt',"DD");
}




function additalic() {
    let myParagraph =document.getElementById('aylin');
    myParagraph.classList.add('italic');
}


function createNewDiv() {
    let newDiv= document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.textContent= 'This is  dynamically crated div!';
    document.body.appendChild(newDiv);
}














  // Harita Kodu
  function initMap() {
    var istanbul = {lat: 41.0082, lng: 28.9784}; // İstanbul koordinatları
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: istanbul
    });
    var marker = new google.maps.Marker({
      position: istanbul,
      map: map,
      title: 'İstanbul'
    });
  }

  // Form Gönderme İşlevselliği
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    // Form verilerini al
    var formData = new FormData(this);

    // Form verilerini göndermek için AJAX isteği oluştur
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'form_gonder.php'); // Form verilerini işleyecek olan sunucu tarafı dosyasının yolu

    // Sunucudan yanıt alındığında çalışacak olan fonksiyon
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Sunucudan gelen yanıtı burada işleyebilirsiniz
        console.log(xhr.responseText);
        alert('Mesajınız başarıyla gönderildi!');
        document.getElementById('contact-form').reset(); // Formu temizle
      } else {
        // Sunucudan bir hata aldıysanız burada işleyebilirsiniz
        console.error('Form gönderilirken bir hata oluştu.');
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    };

    // Form verilerini gönder
    xhr.send(formData);
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
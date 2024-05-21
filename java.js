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
//alert('cześć'); to jest funkcja alert. zostawiam ją tu tylko dla zapamiętania

const firstName = 'Rob'
const age = 33

console.log(`Cześć! Nazywam się ${firstName} i mam ${age} lata :)`);

const header = document.querySelector('.page-header__heading--js')

console.log(header.innerHTML)
header.innerHTML = "Robert Uba - strona domowa."

const domHeader = document.querySelector('.dom-article__header--js')
domHeader.innerHTML = "Nagłówek stworzony dzięki DOM w JS"
console.log(domHeader.innerHTML)

const domContentArticle = document.querySelector('.dom-article__content--js')
domContentArticle.innerHTML = 'Ta treść powstała w JS dzięki DOM, a nagłówek to nawet pokolorowany został!'
console.log(domContentArticle.innerHTML)

//console.log(domHeader.style)

domHeader.style.color = 'pink';

//function calculate (myNumber) {
 //   return myNumber*7+5;
//}

//console.log(calculate(2))


//function calculate2(myNumber2)   {
//    myNumber2 = myNumber2 + 3;
//    console.log(myNumber2);
//    return myNumber2*7;
//}

// Można tą funckję zapisać również za pomocą metody: FAT arrow functions

const calculate2 = myNumber2 => (myNumber2+3)*7 

// Jest to inny sposób definiowania funckji, krósza forma, która weszła wraz z Ecma Script 6. Nie otrzymujemy wtedy console.log(), jeśli był on w ciele funckcji.

calculate2(4);
calculate2(1);
const result2 = calculate2(2);
console.log(result2);


const result = calculate2(3);
console.log(result);
//console.log(calculate2(3));

//function hello() {
 //   console.log('hello');
 //   console.log('hello');
//}

//hello();
//console.log(hello());



function calculate3(myNumber3){
    myNumber3 = myNumber3+4
    console.log(myNumber3)
    return myNumber3*5
}

calculate3(1);

console.log(calculate3(1));

const result3 = calculate3(2);

console.log(result3);

//HOMEWORK V 

function greet (name, age2){
    console.log (name, age2)
  
    return `Witaj ${name}! masz ${age2} lat!`
}

greet('Robert', +33);
//greet(35);

console.log(greet('Robert', +35));

console.log(greet('Monika', +34));

const result4 = greet('Bart', +16);

console.log(result4)

const resultGreet = greet('Iwona', +59);

console.log(resultGreet);

//HOMEWORK V MKorsan Solution

const greetTwo = (name, age) =>{
    const greetTwoResult = `Witaj ${name}! Masz ${age} lat.`
    return greetTwoResult
}
const greeting = greetTwo('Greg', 56)

console.log(greetTwo('Bob', 76));
 console.log(greeting)

 const greetThree = (nameTwo, ageTwo) => `Witaj ${nameTwo}! Masz ${ageTwo}.`

 console.log(greetThree('John', 5));








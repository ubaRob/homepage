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
domContentArticle.innerHTML = 'Ta treść powstała w JS dzięki DOM'
console.log(domContentArticle.innerHTML)

//console.log(domHeader.style)

domHeader.style.color = 'pink';





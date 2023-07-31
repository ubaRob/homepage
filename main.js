//alert('cześć'); to jest funkcja alert. zostawiam ją tu tylko dla zapamiętania

const firstName = 'Rob'
const age = 33

console.log(`Cześć! Nazywam się ${firstName} i mam ${age} lata :)`);

const header = document.querySelector('.page-header__heading--js')

const domHeader = document.querySelector('.dom-article__header--js')

const domArticleContent = document.querySelector('.dom-article__content--js')

console.log(domHeader.innerHTML)
console.log(domArticleContent.innerHTML)

domHeader.innerHTML = "Nagłówek napisany w JS"

domArticleContent.innerHTML = "Ta treść została napisana przy pomocy DOM w JS<br> Pokolorwana również."

console.log(header.innerHTML)

console.log(domHeader.style)

domHeader.style.color = 'red';
domArticleContent.style.color = 'pink';






//alert('cześć'); to jest funkcja alert. zostawiam ją tu tylko dla zapamiętania

const firstName = 'Rob'
const age = 33

console.log(`Cześć! Nazywam się ${firstName} i mam ${age} lata :)`);

const header = document.querySelector('.page-header__heading--js')

const domArticle = document.querySelector('.dom-article__header--js')

const domArticleContent = document.querySelector('.dom-article__content--js')

console.log(domArticle.innerHTML)
console.log(domArticleContent.innerHTML)

domArticle.innerHTML = "DOM-owe przedszkole"

domArticleContent.innerHTML = "Aby zadeklarować zmienną const w JS nie możemy używaźć w tym celu kebab-case. Nie wiem czemu, ale mi nie działa"

console.log(header.innerHTML)

console.log(header.style)






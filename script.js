import {data} from "./data.js";

let container  = document.querySelector('.container_script')
let reproductionsButtons = document.querySelector('.reproductions__buttons')
let personalId = null

function createArticles(){
    for(let i = 0; i < data.length; i++){
        if(i === 0){
            let reproductionsButton = document.createElement('p')
            reproductionsButton.classList.add('reproductions__menu_button')
            reproductionsButton.classList.add(`${data[i].country}`)
            reproductionsButton.classList.add('reproductions__menu_button-active')
            reproductionsButton.textContent = `${data[i].countryRU}`
            reproductionsButtons.appendChild(reproductionsButton)

            let div = document.createElement('div')
            div.classList.add(`reproductions__articles_${data[i].country}`)
            div.classList.add(`reproductions__articles`)
            container.appendChild(div)

            let country = data[i].country
            for(let n = 0; n < data.length; n++){
                if(data[n].country === country){
                    let article = document.createElement('article')
                    article.classList.add('reproductions__article')
                    personalId++
                    article.id = `${personalId}`
                    
                    article.innerHTML = `
                        <img class="article__img" src="${data[n].img}" alt="">
                        <p class="article__autor">${data[n].author}</p>
                        <p class="article__name">${data[n].name}</p>
                        <p class="article__paper">${data[n].type}</p>
                        <p class="article__price">${data[n].price} руб</p>
                        <button class="article__button" > В корзину</button>
                    `
                    div.appendChild(article)
                }
            }
            
        } else{
            if(data[i].country !== data[i-1].country){
                let reproductionsButton = document.createElement('p')
                reproductionsButton.classList.add('reproductions__menu_button')
                reproductionsButton.classList.add(`${data[i].country}`)
                reproductionsButton.textContent = `${data[i].countryRU}`
                reproductionsButtons.appendChild(reproductionsButton)

                let div = document.createElement('div')
                div.classList.add(`reproductions__articles_${data[i].country}`)
                div.classList.add(`reproductions__articles`)
                div.classList.add(`Articles_script`)
                container.appendChild(div)

                let country = data[i].country
                for(let n = 0; n < data.length; n++){
                    if(data[n].country === country){
                        let article = document.createElement('article')
                        article.classList.add('reproductions__article')
                        personalId++
                        article.id = `${personalId}`
                        article.innerHTML = `
                            <img class="article__img" src="${data[n].img}" alt="">
                            <p class="article__autor">${data[n].author}</p>
                            <p class="article__name">${data[n].name}</p>
                            <p class="article__paper">${data[n].type}</p>
                            <p class="article__price">${data[n].price} руб</p>
                            <button class="article__button" > В корзину</button>
                        `
                        div.appendChild(article)
                    }
                }
            }
        }
        
    }
}
createArticles()

let France = document.querySelector('.France')
let Germany = document.querySelector('.Germany')
let England = document.querySelector('.England')
let buyButton = document.querySelectorAll('.article__button')

let basket = document.querySelector('.header__menu_img')
let NumbOfArticles = document.querySelector('.header__menu_img_numb')
let span = document.querySelector('.header__menu_img_span')
let inBasket = document.querySelector('.basket')
let inBasketText = document.querySelector('.basket__main_text')
let basketExit = document.querySelector('.basket__top_exit')
let basketNav = document.querySelector('.basket__main_nav')
let basketPrice = document.querySelector('.basket__price')
let basketPriceText = document.querySelector('.basket__price_text')
let price = 0
let deleteAll = document.querySelector('.basket__price_delete')

let burger = document.querySelector('.header__menu_burger')
let burgerMenu = document.querySelector('.burger__menu')
let burgerMenuLink = document.querySelectorAll('.burger__menu_link')
let FranceArticles = document.querySelector('.reproductions__articles_France')
let GermanyArticles = document.querySelector('.reproductions__articles_Germany')
let EnglandArticles = document.querySelector('.reproductions__articles_England')

let footerG = document.querySelector('.footer__nav_text_Germany ')
let footerF = document.querySelector('.footer__nav_text_France')
let footerE = document.querySelector('.footer__nav_text_England')
let footerGm = document.querySelector('.footer__nav_text_Germany1 ')
let footerFm = document.querySelector('.footer__nav_text_France1')
let footerEm = document.querySelector('.footer__nav_text_England1')

let headerLogo = document.querySelector('.container__mobile')

let localStorage = window.localStorage
let arr = []
let object = {}




let openGermanyReproductions = () => {
    France.classList.remove('reproductions__menu_button-active')
    England.classList.remove('England_script')
    Germany.classList.add('Germany_script')

    FranceArticles.classList.add('Articles_script')
    EnglandArticles.classList.add('Articles_script')
    GermanyArticles.classList.remove('Articles_script')
}
let openFranceReproductions = () => {
    France.classList.add('reproductions__menu_button-active')
    Germany.classList.remove('Germany_script')
    England.classList.remove('England_script')

    FranceArticles.classList.remove('Articles_script')
    GermanyArticles.classList.add('Articles_script')
    EnglandArticles.classList.add('Articles_script')
}
let openEnglandReproductions = () => {
    France.classList.remove('reproductions__menu_button-active')
    Germany.classList.remove('Germany_script')
    England.classList.add('England_script')

    FranceArticles.classList.add('Articles_script')
    GermanyArticles.classList.add('Articles_script')
    EnglandArticles.classList.remove('Articles_script')
}




Germany.addEventListener('click', () => {
    openGermanyReproductions()
})
footerG.addEventListener('click', () => {
    openGermanyReproductions()
})
footerGm.addEventListener('click', () => {
    openGermanyReproductions()
})

France.addEventListener('click', () => {
    openFranceReproductions()
})
footerF.addEventListener('click', () => {
    openFranceReproductions()
})
footerFm.addEventListener('click', () => {
    openFranceReproductions()
})

England.addEventListener('click', () => {
    openEnglandReproductions()
})
footerE.addEventListener('click', () => {
    openEnglandReproductions()
})
footerEm.addEventListener('click', () => {
    openEnglandReproductions()
})

let n = null
burger.addEventListener('click', () => {
    if(n === null){
        burgerMenu.style.setProperty('left', '0')
        burgerMenu.style.setProperty('position', 'fixed')
        // burgerMenu.style.setProperty('top', '56px')
        burgerMenu.style.setProperty('height', '100vh')
        headerLogo.style.setProperty('position', 'fixed')
        n++
    } else if(n === 1){
        burgerMenu.style.setProperty('position', 'absolute')
        burgerMenu.style.setProperty('left', '-400%')
        burgerMenu.style.setProperty('height', 'auto')
        headerLogo.style.setProperty('position', 'sticky')
        n = null
    }

    for(let el of burgerMenuLink){
        el.addEventListener('click', () => {
            burgerMenu.style.setProperty('position', 'absolute')
            burgerMenu.style.setProperty('left', '-100%')
            burgerMenu.style.setProperty('height', 'auto')
        })
    }
})
// el.parentElement.getAttribute('id')

let toBasket = (article) => {
    article.children[5].style.background = '#376B44'
    article.children[5].style.color = '#FFF'
    article.children[5].textContent = `В корзине`
    console.log(article.children[5].textContent);
    
    let check = false
    for(let i = 0; i < arr.length; i++){
        if(article.id === arr[i].id){
            check = true
        }
    }
    if(check === true){
        openTheBasket()
    } else{
        arr.push({"id": article.getAttribute('id'),"picture": article.children[0].src, "author": article.children[1].textContent, "name": article.children[2].textContent,"material": article.children[3].textContent, "cost": article.children[4].textContent, "remove": false })
        localStorage.setItem("InkHouse", JSON.stringify(arr))
    }
    
    

    span.style.display = `flex`
    NumbOfArticles.textContent = arr.length

}

for(let el of buyButton){
    let article = el.parentElement
    el.addEventListener('click', () => {
        toBasket(article)
    })
}

let deletingArticle = (el) => {
    console.log('привет');
    // el.remove = true
    // arr = arr.filter(el => el.remove !== true)

    let check = false
    for(let i = 0; i < arr.length; i++){
        if(el.getAttribute('id') === arr[i].id){
            el.remove()
            arr = arr.filter(mass => mass.id !== el.getAttribute('id'))
            check = true

            let article = document.getElementById(`${el.getAttribute('id')}`)
            article.children[5].style.background = 'transparent'
            article.children[5].style.color = '#598D66'
            article.children[5].textContent = `В корзину`
            // console.log(el.children[2].textContent);
            price = price - +(el.children[2].textContent.split(' ')[0] + el.children[2].textContent.split(' ')[1])
            console.log(price);
            basketPriceText.textContent = `Итог: ${price} руб`
            
        }
    }
    console.log(arr);
    
    NumbOfArticles.textContent = arr.length

    el.remove = true
    localStorage.setItem("InkHouse", JSON.stringify(arr))
    if(arr.length === 0){
        localStorage.clear()
        basketNav.style.display = 'none'
        inBasketText.style.display = 'flex'
        basketPrice.style.display = 'none'
        span.style.display = 'none'
    }
}

let div = document.querySelector('.basket__main_articles') //////////////////////////////////////////////////////////////
let openTheBasket = () => {
    div.style.display = 'flex'
    inBasket.style.setProperty("display", "block")
    if(arr.length !== 0){
        inBasketText.style.display = 'none'
        basketNav.style.display = 'flex' 
        basketPrice.style.display = 'flex'  

    } else if(arr.length === 0){
        basketNav.style.display = 'none'
        inBasketText.style.display = 'flex'
        basketPrice.style.display = 'none'
    }
    for(let i = 0; i < arr.length; i++){
        let article = document.createElement('article')
        article.classList.add("basket__main_article")
        article.id = `${arr[i].id}`
        article.innerHTML = `
            <img class="basket__main_article_img" src="${arr[i].picture}" alt="">
            <p class="basket__main_article_name">${arr[i].name}</p>
            <p class="basket__main_article_cost">${arr[i].cost}</p>
            <div class="basket__top_exit exit_article">
                <span class="basket__top_exit_span1"></span>
                <span class="basket__top_exit_span2"></span>
            </div>
        `
        div.appendChild(article)

        price = price + +(arr[i].cost.split(' ')[0] + arr[i].cost.split(' ')[1])
        
        let deleteArticle = article.querySelectorAll('.exit_article')
        for(let el of deleteArticle){
            el.addEventListener('click', () => deletingArticle(article))
        }
    }


    basketPriceText.textContent = `Итог: ${price} руб`
}

basket.addEventListener('click', () => openTheBasket())
basketExit.addEventListener('click', () => {
    inBasket.style.setProperty("display", "none")
    div.innerHTML = ``
})

let article = document.querySelectorAll('.reproductions__article')
deleteAll.addEventListener('click', () => {
    arr = []
    localStorage.setItem("InkHouse", JSON.stringify(arr))
    openTheBasket()
    NumbOfArticles.textContent = arr.length
    basketNav.style.display = 'none'
    inBasketText.style.display = 'flex'
    basketPrice.style.display = 'none'
    span.style.display = 'none'
    for(let el of article){
        el.children[5].style.background = 'transparent'
        el.children[5].style.color = '#598D66'
        el.children[5].textContent = `В корзину`
    }
    div.style.display = 'none'
})

if(localStorage.getItem('InkHouse') !== null){
    arr = JSON.parse(localStorage.InkHouse)
    for(let i = 0; i < arr.length; i++){
        let article = document.getElementById(`${arr[i].id}`)
        article.children[5].textContent = `В корзине`
        article.children[5].style.background = '#376B44'
        article.children[5].style.color = '#FFF'
    }
    span.style.display = `flex`
    NumbOfArticles.textContent = arr.length
    if(NumbOfArticles.textContent === '0'){
        span.style.display = 'none'
    }
}
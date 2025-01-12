let France = document.querySelector('.France')
let Germany = document.querySelector('.Germany')
let England = document.querySelector('.England')
let buyButton = document.querySelectorAll('.article__button')
let basket = document.querySelector('.header__menu_img')
let NumbOfArticles = document.querySelector('.header__menu_img_numb')

let inBasket = document.querySelector('.basket')
let inBasketText = document.querySelector('.basket__main_text')
let basketExit = document.querySelector('.basket__top_exit')

let burger = document.querySelector('.header__menu_burger')
let burgerMenu = document.querySelector('.burger__menu')
let burgerMenuLink = document.querySelectorAll('.burger__menu_link')
let FranceArticles = document.querySelector('.reproductions__articles_France')
let GermanyArticles = document.querySelector('.reproductions__articles_Germany')
let EnglandArticles = document.querySelector('.reproductions__articles_England')

let localStorage = window.localStorage
arr = []


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

France.addEventListener('click', () => {
    openFranceReproductions()
})

England.addEventListener('click', () => {
    openEnglandReproductions()
})

let n = null
burger.addEventListener('click', () => {
    if(n === null){
        burgerMenu.style.setProperty('left', '0')
        burgerMenu.style.setProperty('position', 'sticky')
        burgerMenu.style.setProperty('top', '67px')
        burgerMenu.style.setProperty('height', '100vh')
        n++
    } else if(n === 1){
        burgerMenu.style.setProperty('position', 'absolute')
        burgerMenu.style.setProperty('left', '-100%')
        burgerMenu.style.setProperty('height', 'auto')
        n = null
    }

    for(el of burgerMenuLink){
        el.addEventListener('click', () => {
            burgerMenu.style.setProperty('position', 'absolute')
            burgerMenu.style.setProperty('left', '-100%')
            burgerMenu.style.setProperty('height', 'auto')
        })
    }
})
// el.parentElement.getAttribute('id')


for(el of buyButton){
    let article = el.parentElement
    el.addEventListener('click', () => {
        basket.innerHTML = `
            <a class="menu__img" href="#">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_1148)">
                    <path d="M8.24992 20.1667C8.75618 20.1667 9.16658 19.7563 9.16658 19.25C9.16658 18.7438 8.75618 18.3334 8.24992 18.3334C7.74366 18.3334 7.33325 18.7438 7.33325 19.25C7.33325 19.7563 7.74366 20.1667 8.24992 20.1667Z" stroke="#2C2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.3334 20.1667C18.8397 20.1667 19.2501 19.7563 19.2501 19.25C19.2501 18.7438 18.8397 18.3334 18.3334 18.3334C17.8272 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8272 20.1667 18.3334 20.1667Z" stroke="#2C2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.916748 0.916626H4.58341L7.04008 13.1908C7.12391 13.6128 7.3535 13.9919 7.68866 14.2617C8.02383 14.5315 8.44322 14.6749 8.87341 14.6666H17.7834C18.2136 14.6749 18.633 14.5315 18.9682 14.2617C19.3033 13.9919 19.5329 13.6128 19.6167 13.1908L21.0834 5.49996H5.50008" stroke="#2C2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" fill="#598D66"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4_1148">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
            <p class="header__menu_img_numb">${arr.length+1}</p>
        `
        article.children[5].style.background = '#376B44'
        article.children[5].style.color = '#FFF'
        arr.push({"id": article.getAttribute('id'),"picture": article.children[0].src, "author": article.children[1].textContent, "name": article.children[2].textContent,"material": article.children[3].textContent, "cost": article.children[4].textContent})
        localStorage.setItem("InkHouse", JSON.stringify(arr))
        article.children[5].textContent = `В корзине`
        // console.log(article.children[1].textContent);
    })
}

let div = document.querySelector('.basket__main_articles')
basket.addEventListener('click', () => {
    
    inBasket.style.setProperty("display", "block")
    if(arr !== null){
        inBasketText.style.display = 'none'
    }
    for(let i = 0; i < arr.length; i++){
        let article = document.createElement('article')
        article.classList.add("basket__main_article")
        article.innerHTML = `
            <img class="basket__main_article_img" src="${arr[i].picture}" alt="">
            <p class="basket__main_article_name">${arr[i].name}</p>
            <p class="basket__main_article_cost">${arr[i].cost}</p>
            <div class="basket__top_exit">
                <span class="basket__top_exit_span1"></span>
                <span class="basket__top_exit_span2"></span>
            </div>
        `
        div.appendChild(article)
    }
})

basketExit.addEventListener('click', () => {
    inBasket.style.setProperty("display", "none")
})

if(localStorage.getItem('InkHouse') !== null){
    arr = JSON.parse(localStorage.InkHouse)
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].id);
        let article = document.getElementById(`${arr[i].id}`)
        article.children[5].textContent = `В корзине`
        article.children[5].style.background = '#376B44'
        article.children[5].style.color = '#FFF'
    }
    basket.innerHTML = `
            <a class="menu__img" href="#">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_1148)">
                    <path d="M8.24992 20.1667C8.75618 20.1667 9.16658 19.7563 9.16658 19.25C9.16658 18.7438 8.75618 18.3334 8.24992 18.3334C7.74366 18.3334 7.33325 18.7438 7.33325 19.25C7.33325 19.7563 7.74366 20.1667 8.24992 20.1667Z" stroke="#2C2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.3334 20.1667C18.8397 20.1667 19.2501 19.7563 19.2501 19.25C19.2501 18.7438 18.8397 18.3334 18.3334 18.3334C17.8272 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8272 20.1667 18.3334 20.1667Z" stroke="#2C2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.916748 0.916626H4.58341L7.04008 13.1908C7.12391 13.6128 7.3535 13.9919 7.68866 14.2617C8.02383 14.5315 8.44322 14.6749 8.87341 14.6666H17.7834C18.2136 14.6749 18.633 14.5315 18.9682 14.2617C19.3033 13.9919 19.5329 13.6128 19.6167 13.1908L21.0834 5.49996H5.50008" stroke="#2C2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" fill="#598D66"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4_1148">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
            <p class="header__menu_img_numb">${arr.length}</p>
        `
        
}
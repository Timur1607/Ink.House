let France = document.querySelector('.France')
let Germany = document.querySelector('.Germany')
let England = document.querySelector('.England')
let buyButton = document.querySelectorAll('.article__button')
let basket = document.querySelector('.header__menu_img')

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
                    <path d="M9.7293 8.79V10H5.6693V8.79H7.0893V5.76C7.0093 5.86 6.87263 5.96667 6.6793 6.08C6.49263 6.19333 6.28596 6.29 6.0593 6.37C5.8393 6.45 5.64263 6.49 5.4693 6.49V5.24C5.5893 5.24 5.73263 5.20333 5.8993 5.13C6.07263 5.05 6.24263 4.95667 6.4093 4.85C6.58263 4.74333 6.7293 4.64 6.8493 4.54C6.97596 4.43333 7.05596 4.35 7.0893 4.29H8.4593V8.79H9.7293Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4_1148">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
        `
        arr.push({"id": article.getAttribute('id')})
        localStorage.setItem("Ink.House", JSON.stringify(arr))
        article.children[5].textContent = `В корзине`
    })
}

window.onload = function () {
   
scrollToLink(`.link`)

slider ()

tabsInitial(`.services__tabs-button`, `.services__tabs-item`)

tabsInitial(`.price__tabs-button`, `.price__tabs-table`)

clickTableButton ()

circeSlider ()

galeryClick ()

}

// Tabs

function tabsInitial (buttonsClass, itemClass) {
    const tabsButtons = document.querySelectorAll(buttonsClass)
    const tabs = document.querySelectorAll(itemClass)

        tabs[0].classList.add(`active`)

        tabsButtons.forEach((button, index) => {
            button.addEventListener(`click`, () =>{
            tabChage(index)
            })
        })  
        
        function tabChage (number){
            tabs.forEach((tab) => {
                tab.classList.remove(`active`)
            })
            tabs[number].classList.add(`active`)
        }
}


function clickTableButton () {
    const tableButtons = document.querySelectorAll(`.price__tabs-button`)
    tableButtons[0].classList.add(`clicked`)
    tableButtons.forEach((tableButton) => {
        tableButton.addEventListener(`click`, (e) => {
            tableButtons.forEach((tableButton) => {
                tableButton.classList.remove(`clicked`)
            })
            e.target.classList.add(`clicked`)
        })
    })

 }

 // Slider

 function slider () {
    const items = document.querySelectorAll(`.building__slider-item`)
    
    const prev = document.querySelector(`.building__slider-prev`)
    const next = document.querySelector(`.building__slider-next`)

    let itemPosition = 0

    pointsCreate (items)

    const pointColection = document.querySelectorAll(`.building__slider-point`)

    items[itemPosition].classList.add(`active`)
    pointColection[itemPosition].classList.add(`active`)

    prev.addEventListener(`click`, () => {

        items.forEach((item) => {
            item.classList.remove(`active`)
        })

        pointColection.forEach((point) => {
            point.classList.remove(`active`)
        })

        itemPosition -=1

        if(itemPosition < 0){
            itemPosition = items.length - 1
        }

        items[itemPosition].classList.add(`active`)
        pointColection[itemPosition].classList.add(`active`)
    })

    next.addEventListener(`click`, () => {

        items.forEach((item) => {
            item.classList.remove(`active`)
        })

        pointColection.forEach((point) => {
            point.classList.remove(`active`)
        })

        itemPosition +=1

        if(itemPosition > items.length - 1){
            itemPosition = 0
        }

        items[itemPosition].classList.add(`active`)
        pointColection[itemPosition].classList.add(`active`)
    })

    function pointsCreate (htmlCollection) {
        const container = document.querySelector(`.building__slider-points`)
       

        for(let i = 0; i < htmlCollection.length; i++){
            const point = document.createElement(`div`)
            point.className = `building__slider-point`
            container.append(point)
        }
       
    }
 }

 // Circle
function circeSlider () {
    const spinerItem = document.querySelectorAll(`.spinner__item`)
    let position = 0
    spinerItem[position].classList.add(`visible`)
    setInterval(() =>{
        if(position < spinerItem.length-1){
            position +=1
            spinerItem.forEach((item) =>{
                item.classList.remove(`visible`)
            })
            spinerItem[position].classList.add(`visible`)
        }else{
            position = 0
            spinerItem.forEach((item) =>{
                item.classList.remove(`visible`)
            })
            spinerItem[position].classList.add(`visible`)
        }
       
    },4000)
}

// Galery


function createElement(elemName, className) {
    const elem = document.createElement(elemName)
    elem.className = className
    return elem
    }

function modalGallery(titleText, galeryItems) {
    const modal =  createElement(`div`, `modal`)
    const modalContainer = createElement(`div`, `modal__container`)
    const title = createElement(`h2`, `modal__title`)
    const closeButton = createElement(`span`, `close__button`)

    document.body.append(modal)
    modal.append(modalContainer)
    modalContainer.append(title)
    title.append(titleText)
    title.append(closeButton)

    for(let i = 0; i < galeryItems.length; i++){
        let img =  createElement(`img`, `modal__img`)
        let string = `img/${galeryItems[i]}.jpg`
        let altString = `${titleText} примеры работ`

        img.setAttribute("src",string)
        img.setAttribute("alt",altString)
        modalContainer.append(img)
    }

    setTimeout(()=>{
        modal.classList.add(`animate`)
        document.body.style.overflow = `hidden`
    },100)
   


    document.querySelector(`.close__button`).addEventListener(`click`,() => {

        modal.classList.remove(`animate`)

        setTimeout(()=>{
            modal.remove()
        },1000)
      
        document.body.style.overflow = `auto`

    })
}

function galeryClick () {
    const items = document.querySelectorAll(`.galery__item`)

    items.forEach((item) => {
        item.addEventListener(`click`,(e) => {
            const titleText = e.currentTarget.firstChild.getAttribute(`alt`)
            const galeryItems = e.currentTarget.firstChild.getAttribute(`data-galery`).split(',')

            modalGallery(titleText,galeryItems)
        })
    })
}

function scrollToLink(linksClass) {
    const links = document.querySelectorAll(linksClass)
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener(`click`, (e) => {
            e.preventDefault()
            const href = e.target.getAttribute(`href`).substring(1)
            const scrollTarget = document.getElementById(href)
            const elementPosition = scrollTarget.getBoundingClientRect().top

            window.scrollBy({
                top: elementPosition,
                behavior: `smooth`
            })

        })
    }
}
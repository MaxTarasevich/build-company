
window.onload = function () {

slider ()



tabsInitial(`.services__tabs-button`, `.services__tabs-item`)

tabsInitial(`.price__tabs-button`, `.price__tabs-table`)

clickTableButton ()

}


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
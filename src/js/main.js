
window.onload = function () {

// Tabs
const tabsButtons = document.querySelectorAll(`.services__tabs-button`)
const tabs = document.querySelectorAll(`.services__tabs-item`)

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

// Circle
const circleItem = document.querySelectorAll(`.spinner__item`)



}

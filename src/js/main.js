
window.onload = function () {

tabsInitial(`.services__tabs-button`, `.services__tabs-item`)

tabsInitial(`.price__tabs-button`, `.price__tabs-table`)

clickTableButton ()


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
}

//  Get UI Elements 
// 1. Open Card Elements
const cardContainer = document.querySelector('.card-container')
const openButton = document.querySelector('#open-button')
const xIcon = document.querySelector('#close-button')
console.log(xIcon);


// 2. Close Card Elements 
const closeDiv = document.querySelector('.close-card')


// Event Listeners 
openButton.addEventListener('click', openModal)
xIcon.addEventListener('click', closeCard)

function openModal() {
    cardContainer.style.display = 'none'
    closeDiv.style.display = 'flex'

}

function closeCard() {
    cardContainer.style.display = 'flex'
    closeDiv.style.display = 'none'
}

const bodyElement = document.querySelector('body')
const buttonElement = document.querySelector('#myButton')

buttonElement.addEventListener('click', () => {
    const newElement = document.createElement('p')
    newElement.textContent = 'Bonjour, vous avez cliqué sur le bouton !'
    bodyElement.appendChild(newElement)
})
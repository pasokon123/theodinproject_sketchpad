

const box = document.querySelector('#box')

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const divs = document.createElement('div')
        divs.setAttribute('class', 'pixel')
        box.appendChild(divs)
    }
}
const pixels = document.querySelectorAll('.pixel')

pixels.forEach (element => {
    element.addEventListener('mouseover', hover)
    element.addEventListener('mouseleave', leave)
    function hover () {
        element.style.backgroundColor = 'blue'
    }
    function leave () {
        element.style.backgroundColor = 'white'
    }
})

const body = document.querySelector('body')
const buttonContainer = document.createElement('div')
body.appendChild(buttonContainer)

const button = document.createElement('button')
button.textContent = 'Grid size'
buttonContainer.appendChild(button)

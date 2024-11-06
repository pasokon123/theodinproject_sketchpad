const box = document.querySelector('#box')

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const divs = document.createElement('div')
        box.appendChild(divs)
    }
}
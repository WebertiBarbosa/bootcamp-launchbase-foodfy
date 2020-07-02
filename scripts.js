const modalOverlay = document.querySelector('.modal-overlay')
const cards2 = document.querySelectorAll('.card')


for (let card of cards2) {
    card.addEventListener ('click', function (){
        const imagemId = card.getAttribute('id')
       

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = `images/${imagemId}`
       
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})


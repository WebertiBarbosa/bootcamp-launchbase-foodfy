const modalOverlay = document.querySelector('.modal-overlay')
const cards2 = document.querySelectorAll('.card')


for (let card of cards2) {
    card.addEventListener ('click', function (){
        const imagemId = card.getAttribute('id')
        const receita = card.querySelector('h4').innerHTML
        const autor = card.querySelector('h3').innerHTML

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = `images/${imagemId}`
        modalOverlay.querySelector('h4').innerHTML = `${receita}`
        modalOverlay.querySelector('h3').innerHTML = `${autor}`
    })
}
       
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})



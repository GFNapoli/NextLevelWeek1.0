const searchbutton = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')
const closer = document.querySelector('#modal .header a')

function hideOpenModal(){
    modal.classList.toggle('hide')
}

searchbutton.addEventListener('click', hideOpenModal)
closer.addEventListener('click', hideOpenModal)
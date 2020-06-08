function populaStates(){
    const ufSelect = document.querySelector("select[name = uf]")
    let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let member of data){
            ufSelect.innerHTML += `<option value="${member.id}">${member.nome}</option>`
        }
    })
}

function populaCity(event){
    const citySelect = document.querySelector('select[name = city]')
    const ufSelect = document.querySelector('input[name = state]')
    const ufvalue = event.target.selectedIndex
    ufSelect.value = event.target.options[ufvalue].text
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`
    citySelect.innerHTML = `<option value="">Selecione a Cidade</option>`
    citySelect.disabled = true
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let member of data){
            citySelect.innerHTML += `<option value="${member.nome}">${member.nome}</option>`
        }
    })
    citySelect.disabled = false
}

populaStates()
document.querySelector('select[name = uf]').addEventListener("change", populaCity)

const itemToColect = document.querySelectorAll('.itens-grind li')
for(let item of itemToColect){
    item.addEventListener('click', handSelectedItem)
}

const colectedItens = document.querySelector('input[name=itens]')
let selectedItens = []

function handSelectedItem(event){
    const item = event.target
    item.classList.toggle("selected")
    const itemID = item.dataset.id
    const alreadSelected = selectedItens.findIndex(itemselected => {
        return itemID == itemselected
    })
    if(alreadSelected >= 0){
        const filtredItens = selectedItens.filter(itemSelected =>{
            return itemID != itemSelected
        })
        selectedItens = filtredItens
    }else{
        selectedItens.push(itemID)
    }
    colectedItens.value = selectedItens
}
function selectFill(url, element){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let member of data){
            element.innerHTML += `<option value="${member.id}">${member.nome}</option>`
        }
    })
}

function populaStates(){
    const ufSelect = document.querySelector("select[name = state]");
    let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    selectFill(url, ufSelect);
}

function populaCity(event){
    const citySelect = document.querySelector('select[name = city');
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`;
    citySelect.innerHTML = `<option value="">Selecione a Cidade</option>`;
    selectFill(url, citySelect);
    citySelect.disabled = false;
}

populaStates();
document.querySelector('select[name = state]').addEventListener("change", populaCity);
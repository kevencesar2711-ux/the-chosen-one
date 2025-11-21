let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("Data.json");
    dados = await resposta.json();

    let termoBusca = document.querySelector("input[type='text']").value.toLowerCase();
    let resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.Descrição.toLowerCase().includes(termoBusca)
    );

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; 

    if (dados.length === 0) {
        cardContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }

    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.Descrição}</p>
        <p>Lançamento: ${dado.Lançamento}</p>
        <p>Criador: ${dado.Criador}</p>
        <a href="${dado.Link}" target="_blank">Saiba Mais</a> 
        `

         cardContainer.appendChild(article); 
    }
}

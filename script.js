/*
    Passo 1: Instalar o JSON-SERVER (versão antiga e confiável): 
    npm install -g json-server@0.17.4

    Passo 2: Abrir o PowerShell e executar como administrador:
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

    Passo 3: Digite "A" para sim e dar enter

    Passo 4: Executar o arquivo .json
    json-server --watch api-artist/artist.json

    Passo 5: Após a executar, clique na url da API:
    http://localhost:3000/artists

*/ 

// DOM  - representação de uma árvore
/* Pega o ID */
const searchInput = document.getElementById('search-input'); 
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists')

// Consumir a API JSON
function requestApi(searchTerm){
    // Promisse = Programação assíncrona
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

// Receber um evento
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return; // Parar a aplicação
    }

    requestApi(searchTerm);
});

/* Pega Classe */
// const searchInput2 = document.querySelector(".cards"); 

/* Pega todas as Classe por Array*/
// const searchInput3 = document.querySelectorAll(".cards"); 
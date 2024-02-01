/*
    Para mais informações:
    - Guia de JS: https://www.alura.com.br/artigos/javascript?_gl=1*9msmpw*_ga*MTE4NDI1MjkyMC4xNjQ5NTE0NjI3*_ga_1EPWSW3PCS*MTcwNjQ3NTQ0Ny40Ni4xLjE3MDY0Nzg0ODQuMC4wLjA.*_fplc*UzZJbTFLano0Wkg1dWhxd0pua0Q4eDNDSmMyaWRmMEQ4aHJPdXBFdVh0djgzaUtVbmVSeEpONVNjRElkSSUyRlRZJTJGTkpaQjB4bGhPM3o3UEhkeW5rWElRRzZVS1dINEtvcXJoR0ZTM2dlSFZkcnd4b1FWV0Exa3BscEJoNXRodyUzRCUzRA..
    - CSS Grid: https://www.alura.com.br/artigos/css-grid-guia-propriedades-grid-container-grid-item?_gl=1*w1zfxm*_ga*MTE4NDI1MjkyMC4xNjQ5NTE0NjI3*_ga_1EPWSW3PCS*MTcwNjQ3NTQ0Ny40Ni4xLjE3MDY0Nzg0ODQuMC4wLjA.*_fplc*UzZJbTFLano0Wkg1dWhxd0pua0Q4eDNDSmMyaWRmMEQ4aHJPdXBFdVh0djgzaUtVbmVSeEpONVNjRElkSSUyRlRZJTJGTkpaQjB4bGhPM3o3UEhkeW5rWElRRzZVS1dINEtvcXJoR0ZTM2dlSFZkcnd4b1FWV0Exa3BscEJoNXRodyUzRCUzRA..
    - Flexibilidade em páginas mobiles come medias queries: https://www.alura.com.br/artigos/flexibilidade-em-paginas-para-dispositivos-moveis-com-media-queries?_gl=1*w1zfxm*_ga*MTE4NDI1MjkyMC4xNjQ5NTE0NjI3*_ga_1EPWSW3PCS*MTcwNjQ3NTQ0Ny40Ni4xLjE3MDY0Nzg0ODQuMC4wLjA.*_fplc*UzZJbTFLano0Wkg1dWhxd0pua0Q4eDNDSmMyaWRmMEQ4aHJPdXBFdVh0djgzaUtVbmVSeEpONVNjRElkSSUyRlRZJTJGTkpaQjB4bGhPM3o3UEhkeW5rWElRRzZVS1dINEtvcXJoR0ZTM2dlSFZkcnd4b1FWV0Exa3BscEJoNXRodyUzRCUzRA..
    - DOM: https://www.alura.com.br/artigos/o-que-e-o-dom?_gl=1*48sm3p*_ga*MTE4NDI1MjkyMC4xNjQ5NTE0NjI3*_ga_1EPWSW3PCS*MTcwNjQ3NTQ0Ny40Ni4xLjE3MDY0Nzg0ODQuMC4wLjA.*_fplc*UzZJbTFLano0Wkg1dWhxd0pua0Q4eDNDSmMyaWRmMEQ4aHJPdXBFdVh0djgzaUtVbmVSeEpONVNjRElkSSUyRlRZJTJGTkpaQjB4bGhPM3o3UEhkeW5rWElRRzZVS1dINEtvcXJoR0ZTM2dlSFZkcnd4b1FWV0Exa3BscEJoNXRodyUzRCUzRA..
    - Promises: https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?_gl=1*19nossd*_ga*MTE4NDI1MjkyMC4xNjQ5NTE0NjI3*_ga_1EPWSW3PCS*MTcwNjQ3NTQ0Ny40Ni4xLjE3MDY0Nzg0ODQuMC4wLjA.*_fplc*UzZJbTFLano0Wkg1dWhxd0pua0Q4eDNDSmMyaWRmMEQ4aHJPdXBFdVh0djgzaUtVbmVSeEpONVNjRElkSSUyRlRZJTJGTkpaQjB4bGhPM3o3UEhkeW5rWElRRzZVS1dINEtvcXJoR0ZTM2dlSFZkcnd4b1FWV0Exa3BscEJoNXRodyUzRCUzRA..
    - JSON: https://www.alura.com.br/artigos/o-que-e-json?_gl=1*19nossd*_ga*MTE4NDI1MjkyMC4xNjQ5NTE0NjI3*_ga_1EPWSW3PCS*MTcwNjQ3NTQ0Ny40Ni4xLjE3MDY0Nzg0ODQuMC4wLjA.*_fplc*UzZJbTFLano0Wkg1dWhxd0pua0Q4eDNDSmMyaWRmMEQ4aHJPdXBFdVh0djgzaUtVbmVSeEpONVNjRElkSSUyRlRZJTJGTkpaQjB4bGhPM3o3UEhkeW5rWElRRzZVS1dINEtvcXJoR0ZTM2dlSFZkcnd4b1FWV0Exa3BscEJoNXRodyUzRCUzRA..
*/

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
/* Pega o ID da tag HTML*/
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

// Consumir a API
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url) // Função de consumir a API

    // Promise - Programação assíncrona
        .then((response) => response.json()) // Pegar a resposta e devolver para converter em JSON
        .then((result) => displayResults(result)) // Pegar o resultado resolvido JSON e jogar para mostrar
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden"); // Aparecer a classe
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    // Exibir o card digitado
    result.forEach(element => { // Pegar os elementos da API
        artistName.innerText = element.name; // pegar pelo nome do valor da API
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden'); // Tirar a classe e mostrar o card
}

// Manipular eventos - escutar os eventos
document.addEventListener('input', function () { // Função anônima
    const searchTerm = searchInput.value.toLowerCase();

    // Ocultar os cards da playlist
    if (searchTerm === '') { 
        resultPlaylist.classList.add('hidden'); // Adicionar a classe
        resultArtist.classList.remove('hidden'); // Esconder a classe
        return; // Para a execução
    }
    
    requestApi(searchTerm);
})

/** Manipular eventos com Arrow Function */
//  document.addEventListener('input', () => { // Função anônima
//      const searchTerm = searchInput.value.toLowerCase();
//          if (searchTerm === '') {
    //         resultPlaylist.classList.add('hidden');
    //         resultArtist.classList.remove('hidden');
    //         return
//          }
    
//          requestApi(searchTerm);
//  })

/* Pega Classe */
// const searchInput2 = document.querySelector(".cards"); 

/* Pega todas as Classe por Array*/
// const searchInput3 = document.querySelectorAll(".cards"); 
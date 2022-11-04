
function createGame (player1, hora, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}">
        <strong>${hora}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}">
    </li>
    
    `
}

let delay = -0.4;

function createCard (data, hora, game) {
    delay = delay + 0.4;

    return  ` 
    <div class="card" style="animation-delay:${delay}s">
        <h2>${data} <span>${hora}</span></h2>
            <ul>
                 ${game}
            </ul>
    </div>
`
}


document.querySelector("#cards").innerHTML = 
    
            createCard("24/11","quinta",
             createGame('brasil','16:00', 'serbia' )
            ) +

            createCard("28/11","segunda",
             createGame('brasil','13:00', 'switzerland') 
             ) +

            createCard("02/12","sexta",
             createGame('cameroon','16:00', 'brasil') 
            )
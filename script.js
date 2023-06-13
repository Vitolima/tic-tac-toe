const player1 = "X";
const player2 = "O";
let player = true;

function changePlayer() {
  if (player == true) {
    player = false;
    celula.setAttribute('jogada', player1);
  } else {
    player = true;
    celula.setAttribute('jogada', player2);
  }
}

function startgame(id) {
  let celula = document.getElementById(id);
  let turno = player ? player1 : player2;
  celula.textContent = turno;
  changePlayer();
  verifyWinner();
}

document.addEventListener("click", (event) => {
  if (event.target.matches(".square")) {
    startgame(event.target.id);
  }
});

function verifyWinner() {
  let a1 = document.getElementById('a1').getAttribute('jogada');
  let a2 = document.getElementById('a2').getAttribute('jogada');
  let a3 = document.getElementById('a3').getAttribute('jogada');
  let b1 = document.getElementById('b1').getAttribute('jogada');
  let b2 = document.getElementById('b2').getAttribute('jogada');
  let b3 = document.getElementById('b3').getAttribute('jogada');
  let c1 = document.getElementById('c1').getAttribute('jogada');
  let c2 = document.getElementById('c2').getAttribute('jogada');
  let c3 = document.getElementById('c3').getAttribute('jogada');

  if (
    (a1 === player1 && a2 === player1 && a3 === player1) ||
    (b1 === player1 && b2 === player1 && b3 === player1) ||
    (c1 === player1 && c2 === player1 && c3 === player1) ||
    (a1 === player1 && b1 === player1 && c1 === player1) || 
    (a2 === player1 && b2 === player1 && c2 === player1) || 
    (a3 === player1 && b3 === player1 && c3 === player1) || 
    (a1 === player1 && b2 === player1 && c3 === player1) || 
    (a3 === player1 && b2 === player1 && c1 === player1)    
  ) {
    alert('Jogador 1 venceu!');
  } else if (
    (a1 === player2 && a2 === player2 && a3 === player2) ||
    (b1 === player2 && b2 === player2 && b3 === player2) ||
    (c1 === player2 && c2 === player2 && c3 === player2) ||
    (a1 === player2 && b1 === player2 && c1 === player2) || 
    (a2 === player2 && b2 === player2 && c2 === player2) || 
    (a3 === player2 && b3 === player2 && c3 === player2) || 
    (a1 === player2 && b2 === player2 && c3 === player2) || 
    (a3 === player2 && b2 === player2 && c1 === player2)    
  ) {
    alert('Jogador 2 venceu!');
  } else {
    console.log('O jogo continua...');
  }
}

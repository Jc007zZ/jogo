let inputValue;
let numeroAleatorio;
let dificuldade 
let tentativas = 0


document.getElementById("chute").focus();

function geradorAleatorio(difficulty) {

  dificuldade = difficulty


  // reinicia o jogo 
  document.getElementById("dica").textContent = "";
  document.getElementById('iTentativas').textContent = ""
  document.getElementById("jogarDnv").style.display = "none";
  document.getElementById("chute").placeholder = "chute um numero";
  document.getElementById("chute").disabled = false


// coloca o jogo na tela e tira o form das dificuldades
  document.getElementById("formDificuldade").style.display = "none";
  document.querySelector("div.game").style.display = "flex";

//  gera o numero de acordo com a dificuldade escolhida
  if (difficulty == "easy") {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio);
    document.querySelector("form label").textContent = "Chute um numero de 1 a 10"
    dificuldade = 'easy'
  }
  else if (difficulty == "normal") {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1
    console.log(numeroAleatorio);
    document.querySelector("form label").textContent = "Chute um numero de 1 a 100";
    dificuldade = "normal";
  } 
  else if (difficulty == "hard") {
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    console.log(numeroAleatorio);
    document.querySelector("form label").textContent = "Chute um numero de 1 a 1000";
    dificuldade = "hard";
  }
}



document.getElementById("formGame").addEventListener("submit", function (event) {
  event.preventDefault();
  enviar();
});

//função que testa se o jogador ganhou
function enviar() {
  tentativas += 1
  document.getElementById('iTentativas').textContent = `Tentativas ${tentativas}`

  inputValue = document.getElementById("chute").value;
  if (numeroAleatorio > inputValue) {
    document.getElementById("chute").placeholder = "Chute um numero maior";
    document.getElementById("chute").value = ""
  }

  else if (numeroAleatorio < inputValue) {
    document.getElementById("chute").placeholder = "Chute um numero menor";
    document.getElementById("chute").value = ""
  }

  else {
    document.getElementById("dica").textContent = "parabens voce acertou";
    document.getElementById("chute").value = ""
    document.getElementById("chute").disabled = true
    document.getElementById("chute").style.background = 'white'
    document.getElementById("chute").placeholder = "Você é foda";
    document.getElementById("jogarDnv").style.display = "flex";
  }
}

// reiniciador
document.getElementById("jogarDnv").addEventListener("click", function puxador() { geradorAleatorio(dificuldade) })





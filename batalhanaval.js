var parte1 = Math.floor(Math.random()*5);  //Arredondar um número entre 0 e 5 (0 a 1 *5)
var parte2 = parte1 + 1;
var parte3 = parte1 + 2;		// gera aleatóriamente 3 variáveis com numeros consecutivos entre 0 e 7

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");		// pede para jogar um numero entre 1 e 7


	  
   if (jogada < 1 || jogada > 7) {										// verifica se a jogada foi entre 1 e 7

      alert("Jogada inválida. Tenta de novo!");							// informa o jogador de uma jogada inválida

	  
   } else {

      totalJogadas = totalJogadas + 1;									// atualiza o número de jogadas

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {	// verifica se a jogada está correta

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;										// atualiza o número de partes atingidas
		 
		if (jogada == parte1){											
		parte1 = 8;}
			 
		if (jogada == parte2){
		parte2 = 8;}
			 
		if (jogada == parte3){											// atualiza o valor de cada parte para uma jogada inválida
		parte3 = 8;}													// desta forma não se pode repetir a mesma jogada
		

        if (atingidas == 3) {											// verifica se todas as partes foram atingidas

            foiAfundado = true;											

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste ou já usaste esse número.");

      }

   }

}

// dá uma estatística do jogo em percentagem
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + ( Math.floor(3/totalJogadas *100) +"%");

alert(estatistica);

var voltarJogar = false;

// pergunta ao jogador se quer voltar a jogar e se dá novos valores às diferentes partes
if (foiAfundado == true){
voltarJogar = confirm("Queres voltar a Jogar?");
	if(voltarJogar = true){location.reload();
	var parte1 = Math.floor(Math.random()*5);  //Arredondar um número entre 0 e 5 (0 a 1 *5)
	var parte2 = parte1 + 1;
	var parte3 = parte1 + 2;
	}
}

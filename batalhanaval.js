var parte1 = 3;
var parte2 = 4;
var parte3 = 5;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");

   if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);
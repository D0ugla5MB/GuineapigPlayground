const listaNome = ['L', 'I', 'S', 'T', 'A', '  ', 'D', 'E', '  ', 'T', 'A', 'R', 'E', 'F', 'A', 'S'];
const divListaNome = document.getElementById("titulo_lista");
let letraPos = 0;

const letra = function () {
    
    let letraSpan = document.createElement("span");
    letraSpan.setAttribute("style", `--i:${letraPos}`);

    function pegaLetra(pos) {
        return listaNome[pos];
    }

    letraSpan.textContent = pegaLetra(letraPos);
    divListaNome.appendChild(letraSpan);
}

function carregaNomeLista(){
    while (letraPos <= listaNome.length) {
        letra();
        letraPos++;
    }
}
carregaNomeLista();


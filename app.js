let numerosecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignartextoelemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

function  verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

console.log(intentos);  
if(numeroUsuario === numerosecreto) {
    asignartextoelemento("p", `Acertaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
} else {
    //El usuario no acerto
    if(numeroUsuario > numerosecreto){
        asignartextoelemento("p","El número secreto es menor");
    } else {
        asignartextoelemento("p","El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumerosecreto(params) {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
if (listaNumerosSorteados.length == numeroMaximo) {
asignartextoelemento("p","Ya fuerón sorteados todos los números posibles");
} else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumerosecreto();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignartextoelemento ("h1", "Juego del Número Secreto");
    asignartextoelemento ("p", `Digita un numero del 1 al ${numeroMaximo}`);
    numerosecreto = generarNumerosecreto ();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
let numeroSecreto;
let intentos = 0;
let listNumeroSorts = [];
let maxmun = 20;
let maxIntentos = 3;

function asignarElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numero = parseInt(document.querySelector('#valorUsuario').value);
    if(numeroSecreto == numero){
        //operador terneario intentos == 1 ? "vez" : "veces"
        asignarElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(intentos == maxIntentos){
            asignarElemento('p', 'Ya se hizo el numero maximo de intentos');
        }else{
            if(numero > numeroSecreto){
                asignarElemento('p', 'El numero secreto es menor');
            }else{
                asignarElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
       
    }
    
    
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNSecreto(){
    let numG = Math.floor(Math.random() * maxmun) + 1;
    console.log(numG);
    if(listNumeroSorts.length == maxmun){
        asignarElemento('.texto__parrafo', 'Ya se sortearon los numero posibles');
    }else{
        if(listNumeroSorts.includes(numG)){
            //llama a si mismo: recursividad
            return generarNSecreto();
        }else{
            listNumeroSorts.push(numG);
            return numG;
        }    
    }

    
}
function condicionesIniciales() {
    asignarElemento('h1', 'Juego del Numero Secreto');
    asignarElemento('.texto__parrafo', `Indica un numero del 1 al ${maxmun}`);
    numeroSecreto = generarNSecreto();
    intentos =1;
}

function reiniciarJuego(){
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    limpiarCaja();
}

condicionesIniciales();




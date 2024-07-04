

let numeroSecreto =0;
let  intentos=0;
let listaNumerosSorteados =[];
let numeroMaximo =10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
 }

function verificarIntento(){
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(`Intento : ${intentos}`);

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el Numero en ${intentos} ${(intentos===1)? 'vez': 'veces'}`);
        //console.log(`Acerste en el intento : ${intentos}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
            //console.log(`Intento : ${intentos}`);
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
            //console.log(`Intento : ${intentos}`);
        }
        intentos++;
        limpiarCaja();
    }

     return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto(){
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se Sortearon todos los números posibles ');
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    
    asignarTextoElemento('h1','Juego del numero secreto ACT');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos =1;
    console.log(numeroSecreto);
    
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    //Generar el numero aleattorio
    //Ininicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo jueeego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

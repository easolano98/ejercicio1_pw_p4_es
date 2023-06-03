let intentos=0

function intentosAcertados(){
    if(intentos==1){
        document.getElementById("puntuacion").innerHTML="Puntaje 5";
        document.getElementById("intentos").innerHTML="Intentos 1";

    }
    else if(intentos==2){
        document.getElementById("puntuacion").innerHTML="Puntaje 3";
        document.getElementById("intentos").innerHTML="Intentos 2";

    }

    else if(intentos==3){
        document.getElementById("puntuacion").innerHTML="Puntaje 1";
        document.getElementById("intentos").innerHTML="Intentos 3";
    }
    else{
        reiniciar();
    }
    
}

function intentosErroneos(){
    if(intentos==1){
        document.getElementById("puntuacion").innerHTML="Puntaje 0";
        document.getElementById("intentos").innerHTML="Intento 1";

    }
    else if(intentos==2){
        document.getElementById("puntuacion").innerHTML="Puntaje 0";
        document.getElementById("intentos").innerHTML="Intentos 2";

    }

    else if(intentos>=3){
        reiniciar();
    }
    

}



function mensajeAcertado(){
    document.getElementById("mensaje").innerHTML="Felicitaciones, has seleccionado la opción correcta";
    document.getElementById("imagen").src="../img/pcolor.jpg";
    document.getElementById("mensaje").style.backgroundColor=("blue");
    document.getElementById("mensaje").style.border=("2px solid black");
    document.getElementById("mensaje").style.fontFamily=("'Times New Roman', Times, serif");
    document.getElementById("mensaje").style.color=("white");
    intentos++;
    intentosAcertados();
    

}

function mensajeErroneo(){
    document.getElementById("mensaje").style.color=("black");

    document.getElementById("mensaje").innerHTML="Pokémon incorrecto, intentalo nuevamente";
    intentos ++;
    intentosErroneos()
}

function reiniciar(){
    document.getElementById("mensaje").innerHTML="";
    document.getElementById("imagen").src="../img/pnegro.jpg";
    document.getElementById("mensaje").style.border=("2px solid white");
    document.getElementById("mensaje").style.backgroundColor=("white");
    document.getElementById("puntuacion").innerHTML="Puntaje 0";
    document.getElementById("intentos").innerHTML="Intentos 0";
    puntaje=0
    intentos=0



}